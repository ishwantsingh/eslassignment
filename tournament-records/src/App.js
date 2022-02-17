import React , {Component} from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import Homepage from "./components/Homepage"
import Headbar from "./components/Headbar"
import Footer from "./components/Footer";

import {getMatches,getMatchesComplete,getTournamentDetails,getTournamentDetailsComplete,getContestants,getContestantsComplete,requestCompleted,requestFailed} from "./redux/actions/actionCreators"

const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  text-align: center;
  position: relative;
`;

class App extends Component {
  constructor(props) {
    super(props);

    //all data recieved from the API is stored in the redux state.
    this.state = {
      matchApi: "https://eslbackend.herokuapp.com/league/"
    };
  }

  searchItemHandler = async e => {
    let searchTerm = e.target.previousElementSibling.value;

    var requestOptions = {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      },
      redirect: 'follow'
    };

    Promise.all([
      fetch(this.state.matchApi+`${searchTerm}/results`, requestOptions)
        .then(res => {
          this.props.getMatches();
          if (!res.ok) {
            throw new Error('Network response was not ok');
          }
          return res.json();
        })
        .then((data) => {
          this.props.getMatchesComplete(data); //returned data stored in state
          return true;
        }),
      fetch(this.state.matchApi+`${searchTerm}`, requestOptions)
        .then(res => {
          if (!res.ok) {
            throw new Error('Network response was not ok');
          }
          this.props.getTournamentDetails();
          return res.json();
        })
        .then((data) => {
          this.props.getTournamentDetailsComplete(data); //returned data stored in state
        }),
      fetch(this.state.matchApi+`${searchTerm}/contestants`, requestOptions)
        .then(res => {
          if (!res.ok) {
            throw new Error('Network response was not ok');
          }
          this.props.getContestants();
          return res.json();
        })
        .then((data) => {
          this.props.getContestantsComplete(data); //returned data stored in state
        })
    ])
    .then(() => {
      this.props.requestCompleted();
    })
    .catch((error) => {
      this.props.requestFailed();
      window.alert("Error fetching data. Please try cheching the League ID you entered.")
      console.log("error", error)
    });
  };

  render() {  
    const {data} = this.props;
    return (
      <Container>
        <Headbar />        
        <Homepage isLoading={data.isLoading} searchQueried={data.hasSearched} searchItems={this.searchItemHandler} tournamentDetails={data.tournamentDetails}
         matches={data.matches}  contestants={data.contestants}/>
         <div style={{clear: "both"}}></div>
        <Footer />
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getMatches: () => dispatch(getMatches()),
    getMatchesComplete: (matches) => dispatch(getMatchesComplete(matches)),
    getTournamentDetails: () => dispatch(getTournamentDetails()),
    getTournamentDetailsComplete: (tournamentDetails) => dispatch(getTournamentDetailsComplete(tournamentDetails)),
    getContestants: () => dispatch(getContestants()),
    getContestantsComplete: (contestants) => dispatch(getContestantsComplete(contestants)),
    requestCompleted: () => dispatch(requestCompleted()),
    requestFailed: () => dispatch(requestFailed())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
