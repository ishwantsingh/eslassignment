import styled from "styled-components";

import Records from './Records'

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  background-image: url("https://cdn.eslgaming.com/misc/gfx/media/play/region/global/r6/r6-branding.jpg");
  background-position: top center;
  background-repeat: no-repeat;
  background-color: black ;   
  background-attachment: fixed;
  background-size: auto;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 0;
  margin-top: 0px;
  display: block;
  .translucent{
    position: relative;
    width: 65%;
    height: 100%;
    border-radius: 5px;
    margin: 0px auto;
    // margin-bottom: -20px;
    background-color: rgba(255,255,255,.1)!important;
  }
  .sub-container {
    width: 96%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }
`;

function Homepage() {
  return (
    <Container>
      <br/>
      <div className="translucent">
        <div className="sub-container">
          <Records />
        </div>
      </div>
    </Container>
  );
}

export default Homepage;
