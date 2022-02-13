import React , {Component} from "react";
import styled from "styled-components";

import Homepage from "./components/Homepage"
import Headbar from "./components/Headbar"
import Footer from "./components/Footer";

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
    console.log(searchTerm)

    fetch(this.state.matchApi+`${searchTerm}/results`, {
      method: 'GET'
    })
    .then(res => {
      this.setState({loading: true});
      if (!res.ok) {
        this.setState({loading: false});
        throw new Error('Network response was not ok');
      }
      return res.json();
    })
    .then((data) => {
        this.setState({ matches: data, searched: true}); //returned data stored in state
        return true;
    })
    .then(() => {
      this.setState({loading: false})
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
        //alert in case of network error
        // window.alert("Error fetching data. Please try cheching your internet connection and refreshing the page.")
        this.setState({loading: false});
      });

    fetch(this.state.matchApi+`${searchTerm}/contestants`, {
      method: 'GET',
    })
    .then(res => {
      this.setState({loading: true});
      return res.json();
    })
    .then((data) => {
        this.setState({ contestants: data,loading: false}); //returned data stored in state
        // console.log(data,"res")
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
        this.setState({loading: false});
      });

    fetch(this.state.matchApi+`${searchTerm}`, {
      method: 'GET',
    })
    .then(res => {
      this.setState({loading: true});
      return res.json();
    })
    .then((data) => {
        this.setState({ tournamentDetails: data,loading: false}); //returned data stored in state
        // console.log(data,"res")
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
        this.setState({loading: false});
      });
  };

  render() {  
    return (
      <Container>
        <Headbar />        
        <Homepage isLoading={this.state.loading} searchQueried={this.state.searched} searchItems={this.searchItemHandler} tournamentDetails={this.state.tournamentDetails}
         matches={this.state.matches}  contestants={this.state.contestants}/>
         <div style={{clear: "both"}}></div>
        <Footer />
      </Container>
    );
  }
}

export default App;
