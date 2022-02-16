import React from "react";
import styled from "styled-components";
import moment from "moment";
import { connect } from "react-redux";

import Record from "./Record";
import polygon from "../assets/polygon.svg"
import Spinner from "./Spinner"
import { componentsMounted } from "../redux/actionCreators";

const Container = styled.div`
  width: 98%;
  display: ${props => props.searchQueried? "flex" : "none"};
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-top: 20px;
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  border-radius: 2px;
  h4,p {
    margin: 0;
    text-align: left;
  }
  .tournament-heading {
    display: flex;
    flex-direction: column;
    width: 100%;
    background: #FFFFFF;
    border-radius: 2px;
    border-top: 6px solid #28B662;
  }
  .tournament-name {
    width: 92%;
    font-size: 1.5em;
    font-weight: bold;
    color: #333333;
    line-height: 29px;
    margin: 15px auto;
    margin-bottom: 4px;
    text-align: left;
  }
  .tournament-date {
    font-size: 0.875em;
    font-weight: normal
    color: #333333;
    line-height: 19px;
    width: 92%;
    margin: 0 auto;
    margin-bottom: 10px;
    padding-bottom: 10px;
  }
  .tournament-records {
    margin-top: 20px;
    background: #FFFFFF;
    border-radius: 2px;
  }
  .date-containter {
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin: 0 auto;
  }
  .date-sort {
    font-size: 0.875em;
    display: flex;
    border: 2px solid #BDC3C7;
    border-radius: 2px;
    margin: 16px 0 0 0;
    height: 30px;
    width: 62px;
    justify-content: space-evenly;
    align-items: center;
    cursor: pointer;
  }
  .record-list {
      border-radius: 2px;
  }
  .rotate {
    transform: rotate(180deg);
  }
`;

const NoMatches = styled.div`
  display: ${props => props.display};
  width: 100%;
  height: 5rem;
  margin-top: 1rem;
  justify-content: center;
  align-items: center;
  background: #FFFFFF;
  border-radius: 2px;
`

class Records extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      isAscending: true,
      matchArray: [],
      isArrayEmpty: false
    }
  }

  componentDidMount = () => {
    this.props.componentsMounted()
  }

  compareDatesAsc = ( a, b ) => {
    if ( a["beginAt"] < b["beginAt"]){
      return -1;
    }
    if ( a["beginAt"] > b["beginAt"]){
      return 1;
    }
    return 0;
  }
  compareDatesDsc = ( a, b ) => {
    if ( a["beginAt"] > b["beginAt"]){
      return -1;
    }
    if ( a["beginAt"] < b["beginAt"]){
      return 1;
    }
    return 0;
  }

  setDateSort = (isAscending) => {
    this.setState({isAscending: isAscending});
    if (this.props.matches && isAscending === true)  {

      this.setState({matchArray: [...this.props.matches].sort(this.compareDatesAsc)}); 
      document.querySelector(".date-arrow").classList.remove("rotate")

    } else if (this.props.matches && isAscending === false) {

      this.setState({matchArray: [...this.props.matches].sort(this.compareDatesDsc)});
      document.querySelector(".date-arrow").classList.add("rotate")

    }
  }
  
  render() {
    if (this.props.isLoading || !this.props.searchQueried) {
      return (
        <Container searchQueried={this.props.searchQueried}>
          <Spinner />
        </Container>
      )
    }
    else if (this.props.tournamentDetails) {
      return (
        <Container searchQueried={this.props.searchQueried}>
          <div className="tournament-heading">
            <h4 className="tournament-name">
              {this.props.tournamentDetails ? this.props.tournamentDetails["name"]["full"]: "name"}
            </h4>
            <p className="tournament-date">
            {this.props.tournamentDetails && this.props.tournamentDetails.timeline?moment(this.props.tournamentDetails.timeline.inProgress.begin).format("Do MMMM YYYY") : ""}
            </p>
          </div>
          <div className="tournament-records">
            <div className="date-containter">
              <div className="date-sort" onClick={this.state.isAscending === true ? () => this.setDateSort(false) : () => this.setDateSort(true)}>
                Date 
                <img className="date-arrow" src={polygon} alt="arrow"/>
              </div>
            </div>
            <div className="record-list">
              {this.props.matches && this.props.matches.length !== 0 && this.state.isAscending === true?
                [...this.props.matches].sort(this.compareDatesAsc).map((match) => {
                  return (
                    <Record key={match.id} match={match} contestants={this.props.contestants} />  
                  )
                }) : [...this.props.matches].sort(this.compareDatesDsc).map((match) => {
                  return (
                    <Record key={match.id} match={match} contestants={this.props.contestants} />  
                  )
                })}
                <NoMatches display={this.props.matches.length == 0 ? "flex" : "none"}>
                  No matches were found for this Tournament.
                </NoMatches>
            </div>
          </div>
        </Container>
      );
    }
    else {
      return null
    }
  }  
}

const mapDispatchToProps = dispatch => {
  return {
    componentsMounted: () => dispatch(componentsMounted()),
  };
};

export default connect(null, mapDispatchToProps)(Records);