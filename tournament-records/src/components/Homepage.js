import styled from "styled-components";

import Records from './Records'
import SearchBar from "./Searchbar";
import EslBanner from "./EslBanner";
import InfoPanels from "./InfoPanels";

const Container = styled.div`
  height: 100%;
  width: 100%;
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
  display: table;
  // position: absolute;
  top: 90px!important;
  box-sizing: border-box;
  margin-bottom: -20px;
  .translucent{
    position: relative;
    width: 65%;
    height: 100%;
    border-radius: 5px;
    margin: 0px auto;
    margin-bottom: 50px;
    padding-bottom: 20px;
    background-color: rgba(255,255,255,.1)!important;
  }
  .sub-container {
    width: 96%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }
  .content-bottom {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .content-left {
    width: 69%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
`;

function Homepage(props) {
  return (
    <Container>
      <br/>
      <div className="translucent">
        <div className="sub-container">
          <SearchBar searchItems={props.searchItems}/>
          <div className="content-bottom">
            <div className="content-left">
              <Records isLoading={props.isLoading} searchQueried={props.searchQueried} tournamentDetails={props.tournamentDetails}
              matches={props.matches}  contestants={props.contestants}/>
              <InfoPanels searchQueried={props.searchQueried}/>
            </div>
            <EslBanner />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Homepage;

// {this.state.loading? <Spinner />  //spinner is displayed when the api call is in 'Loading' state
//         :