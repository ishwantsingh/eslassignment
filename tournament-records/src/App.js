import React , {Component} from "react";
import styled from "styled-components";

import Homepage from "./components/Homepage"
import Headbar from "./components/Headbar"

const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  text-align: center;
`;

class App extends Component {
  constructor(props) {
    super(props);

    //all data recieved from API is stored in the state. So only 1 call is made
    this.state = {
      loading: false,
      searched: false
    };
  }
  render() {  
    return (
      <Container>
        <Headbar />        
        <Homepage searchQueried={this.state.searched}/>
      </Container>
    );
  }
}

export default App;
