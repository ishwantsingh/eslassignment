import React, {useState} from "react";
import styled from "styled-components";
import moment from "moment";

import Record from "./Record";
import polygon from "../assets/polygon.svg"

const Container = styled.div`
  width: 98%;
  display: ${prop => prop.searchQueried? "flex" : "none"};
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-top: 20px;
  font-family: "Open Sans",sans-serif;
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
    margin-bottom: 0;
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

class Records extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      isAscending: true,
      matchArray: []
    }
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
    if (this.props.matches && this.state.isAscending === true)  {

      this.setState({matchArray: this.props.matches.sort(this.compareDatesAsc)}); 
      document.querySelector(".date-arrow").classList.remove("rotate")

    } else if (this.props.matches && this.state.isAscending === false) {

      this.setState({matchArray: this.props.matches.sort(this.compareDatesDsc)});
      document.querySelector(".date-arrow").classList.add("rotate")

    }
  }
  
  render() {
    if( this.props.isLoading ||!this.props.tournamentDetails ||!this.props.matches) {
      return (
        <Container searchQueried={this.props.searchQueried}>
          <div>
            Loading...
          </div>
        </Container>
      )
    } else {
        return (
          <Container searchQueried={this.props.searchQueried}>
            <div className="tournament-heading">
              <h4 className="tournament-name">
                  {this.props.tournamentDetails? this.props.tournamentDetails.name.full: "name"}
              </h4>
              <p className="tournament-date">
              {this.props.tournamentDetails?moment(this.props.tournamentDetails.timeline.inProgress.begin).format("Do MMMM YYYY") : "Date"}
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
                {console.log("matches",this.props.matches)}
                {this.props.matches && this.state.isAscending === true?
                  this.props.matches.sort(this.compareDatesAsc).map((match) => {
                    return (
                      <Record key={match.id} match={match} contestants={this.props.contestants} />  
                    )
                  }) : this.props.matches.sort(this.compareDatesDsc).map((match) => {
                    return (
                      <Record key={match.id} match={match} contestants={this.props.contestants} />  
                    )
                  })}
              </div>
            </div>
          </Container>
        );
    }
  }  
}

export default Records;
