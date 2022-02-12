import styled from "styled-components";

import Homepage from "./components/Homepage"
import Headbar from "./components/Headbar"

const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  text-align: center;
`;

function App() {
  return (
    <Container>
      <Headbar />
      <Homepage />
    </Container>
  );
}

export default App;
