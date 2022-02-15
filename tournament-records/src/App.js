import React , {Component} from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import Homepage from "./components/Homepage"
import Headbar from "./components/Headbar"
import Footer from "./components/Footer";

import {getMatches,getMatchesComplete,getTournamentDetails,getTournamentDetailsComplete,getContestants,getContestantsComplete,requestCompleted,requestFailed} from "./redux/actionCreators"
// var axios = require('axios');

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

    // if (typeof searchTerm !== Number) {
    //   window.alert("Please enter an appropriate number as the League ID")
    // }


    // var myHeaders = new Headers();
    // myHeaders.append("Cookie", "__cf_bm=h35kHtS6E6WdnKsWSGJD17pCd5eo9SngFG71iQ1Lw9s-1644869194-0-AQHCDK8cGne6Qd9uus4h1T+bVDPsvi4m+Wn/gkCJDLX1HVb7BeHTKSixniHP9mbqlXoVzwbuOgpjPpWY35Kkorg=");
    // myHeaders.append("Access-Control-Allow-Origin", "no-cors")
    // myHeaders.append("Access-Control-Allow-Origin", "*")
    // Access-Control-Allow-Origin: *
  // var requestOptions = {
  //   method: 'GET',
  //   // mode: "cors",
  //   // credentials: "include",
  //   // headers: {
  //   //   'Access-Control-Allow-Origin': 'https://localhost:3000'
  //   // },
  //   // redirect: 'follow'
  // };
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
          // this.setState({loading: true});
          this.props.getMatches();
          // this.props.getContestants()
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
        }),
      fetch(this.state.matchApi+`${searchTerm}`, requestOptions)
        .then(res => {
          // this.setState({loading: true});
          if (!res.ok) {
            // this.setState({loading: false});
            throw new Error('Network response was not ok');
          }
          this.props.getTournamentDetails();
          return res.json();
        })
        .then((data) => {
          // this.setState({ tournamentDetails: data,loading: false}); //returned data stored in state
          this.props.getTournamentDetailsComplete(data);
        }),
      fetch(this.state.matchApi+`${searchTerm}/contestants`, requestOptions)
        .then(res => {
          // this.setState({loading: true});
          if (!res.ok) {
            // this.setState({loading: false});
            throw new Error('Network response was not ok');
          }
          this.props.getContestants();
          return res.json();
        })
        .then((data) => {
          // this.setState({ contestants: data,loading: false}); //returned data stored in state
          this.props.getContestantsComplete(data);
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

    // var config = {
    //   method: 'get',
    //   url: 'https://api.eslgaming.com/play/v1/leagues/177161/results',
    //   // headers: { 
    //   //   'Cookie': '__cf_bm=h35kHtS6E6WdnKsWSGJD17pCd5eo9SngFG71iQ1Lw9s-1644869194-0-AQHCDK8cGne6Qd9uus4h1T+bVDPsvi4m+Wn/gkCJDLX1HVb7BeHTKSixniHP9mbqlXoVzwbuOgpjPpWY35Kkorg='
    //   // }
    // };
    // axios(config)
    // .then(function (response) {
    //   console.log(JSON.stringify(response.data));
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });

    // fetch(this.state.matchApi+`${searchTerm}/results`, requestOptions)
    // .then(res => {
    //   // this.setState({loading: true});
    //   this.props.getMatches();
    //   this.props.getContestants()
    //   console.log("data2",res.json())
    //   // if (!res.ok) {
    //   //   // this.setState({loading: false});
    //   //   throw new Error('Network response was not ok');
    //   // }
    //   return res.json();
    // })
    // .then((data) => {
    //   // this.setState({ matches: data, searched: true,loading: false}); //returned data stored in state
    //   this.props.getMatchesComplete(data);
    //   return true;
    // })
    // .catch(error => {
    //     console.error('There has been a problem with your fetch operation:', error);
    //     //alert in case of network error
    //     window.alert("Error fetching data. Please try cheching the League ID you entered.")
    //     // this.setState({loading: false});
    //   });



    
    // .catch(error => {
    //     console.error('There has been a problem with your fetch operation:', error);
    //     window.alert("Error fetching data. Please try cheching the League ID you entered.")
    //     // this.setState({loading: false});
    //   });



    
    
    // .catch(error => {
    //     console.error('There has been a problem with your fetch operation:', error);
    //     window.alert("Error fetching data. Please try cheching the League ID you entered.")
    //     // this.setState({loading: false});
    //   });
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
    getContestantsComplete: (contestants) => dispatch(getContestantsComplete(contestants)),
    requestCompleted: () => dispatch(requestCompleted()),
    requestFailed: () => dispatch(requestFailed())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
