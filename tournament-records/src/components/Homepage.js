import styled from "styled-components";

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
`;

function Homepage() {
  return (
    <Container>
      <br/>
      <div className="translucent">

      </div>
    </Container>
  );
}

export default Homepage;
