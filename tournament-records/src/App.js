import menuImage from "./assets/menu.png"
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  text-align: center;
`;

const Header = styled.div`
  width: 100%;
  height: 41px;
  margin: 0;
  text-align: center;
  display: flex;
  justify-content: center;
  background: #1D1D1B;
  line-height: 1.15;
  .head-banner {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 98vw;
    color: #FFFFFF;
    margin: auto 0;
    font-size: 14px;
    font-family: "Calps Sans",sans-serif;
    font-weight: 600;
  }
  .menu-image {
    height: 22px;
    width: 21px;
  }
  p{
    width: 98%;
    margin: 0;
    align-self: center;
  }
  .highlighted-text {
    color: #FAFA09;
  }
`;

function App() {
  return (
    <Container>
      <Header>
        <div className="head-banner">
          <img src={menuImage} className="menu-image" alt="menu"/>
          <p><span className='highlighted-text'>ESL Play</span> is part of the ESL Gaming Network</p>
        </div>
      </Header>
    </Container>
  );
}

export default App;
