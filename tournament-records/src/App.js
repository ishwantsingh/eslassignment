import React , {Component} from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import Homepage from "./components/Homepage"
import Headbar from "./components/Headbar"
import Footer from "./components/Footer";

import {getMatches,getMatchesComplete,getTournamentDetails,getTournamentDetailsComplete,getContestants,getContestantsComplete} from "./redux/actionCreators"

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

    //all data recieved from API is stored in the state. So only 1 call is made
    this.state = {
      loading: false,
      searched: false,
      matchApi: "https://api.eslgaming.com/play/v1/leagues/"
    };
  }

  searchItemHandler = async e => {
    let searchTerm = e.target.previousElementSibling.value;

    fetch(this.state.matchApi+`${searchTerm}/results`, {
      method: 'GET'
    })
    .then(res => {
      // this.setState({loading: true});
      this.props.getMatches();
      this.props.getContestants()
      if (!res.ok) {
        // this.setState({loading: false});
        throw new Error('Network response was not ok');
      }
      return res.json();
    })
    .then((data) => {
        // this.setState({ matches: data, searched: true,loading: false}); //returned data stored in state
        this.props.getMatchesComplete(data);
        return true;
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
        //alert in case of network error
        // window.alert("Error fetching data. Please try cheching your internet connection and refreshing the page.")
        // this.setState({loading: false});
      });



    fetch(this.state.matchApi+`${searchTerm}/contestants`, {
      method: 'GET',
    })
    .then(res => {
      // this.setState({loading: true});
      this.props.getContestants();
      return res.json();
    })
    .then((data) => {
        // this.setState({ contestants: data,loading: false}); //returned data stored in state
        this.props.getContestantsComplete(data);
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
        // this.setState({loading: false});
      });



    
    fetch(this.state.matchApi+`${searchTerm}`, {
      method: 'GET',
    })
    .then(res => {
      // this.setState({loading: true});
      this.props.getTournamentDetails();
      return res.json();
    })
    .then((data) => {
        // this.setState({ tournamentDetails: data,loading: false}); //returned data stored in state
        this.props.getTournamentDetailsComplete(data);
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
        // this.setState({loading: false});
      });
  };

  render() {  
    const {data} = this.props;
    console.log("data",data)
    return (
      <Container>
        <Headbar />        
        <Homepage isLoading={data.loading} searchQueried={data.hasSearched} searchItems={this.searchItemHandler} tournamentDetails={data.tournamentDetails}
         matches={data.matches}  contestants={data.contestants}/>
         <div style={{clear: "both"}}></div>
        <Footer />
      </Container>
    );
  }
}

const mapStateToProps = state => {
  console.log("state",state)
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
    getContestantsComplete: (contestants) => dispatch(getContestantsComplete(contestants))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
