import styled from "styled-components";

import anykey from "../assets/anykey.svg";
import staff from "../assets/staffwanted.png";

const Container = styled.div`
  width: 98%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  text-align: center;
  margin-top: 25px;
  font-family: "Open Sans",sans-serif;
  border-radius: 2px;
  h4,p {
    margin: 0;
    text-align: left;
  }
`;

const SubContainer = styled.div`
  width: 48.3%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
  font-family: "Open Sans",sans-serif;
  border-radius: 2px;
  background: #FFFFFF;
  .heading {
    font-size: 1.25rem;
    font-weight: 600;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 20px;
    margin-top: 20px;
    width: 90%;
    background: #FFFFFF;
    border-radius: 2px;
    margin-top: 20px;
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  }
  .info-text {
    width: 90%;
    padding-left: 20px;
    margin: 30px 0px;
    font-size: 0.875rem;
    color: #1D1D1B;
    line-height: 1.45;
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  }
  .floating-image {
    float: right;
    width: 120px;
    height: auto;
    display: block;
    margin-top: 8px;
    cursor: pointer;
    margin-bottom: 5px;
    margin-left: 5px;
  }
`

const PrimaryButton = styled.button`
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  color: #454116;
  font-size: 0.9em;
  width: 90%;
  height: 42px;
  padding: 0em 4vw;
  margin: 10px auto;
  margin-bottom: 25px;
  line-height: 48px;
  background: #ffff09;
  border-radius: 3px;
  border: 2px solid #ffff09;
  cursor: pointer;
  vertical-align: middle;
  line-height: 1;
  text-align: center;
  text-decoration: none;
  font-weight: 500;
  box-shadow: 0 2px 2px rgb(0 0 0 / 15%);
  &:hover {
    background: #ffeb09;
    border: 2px solid #ffeb09;
    transition: 0.2s all ease-in;
    font-size: 0.94em;
  }
  a {
    text-decoration: none !important;
    color: #454116;
  }
`

function InfoPanels(props) {
  return (
    <Container searchQueried={props.searchQueried}>
      <SubContainer>
        <div className="heading">
            Upcoming Tournaments
        </div>
        <p className="info-text">
            <img className="floating-image" src={anykey} alt="any-kay cap"/>
            Video games and esports should be welcoming and inclusive to all. We invite you to join us in creating a gaming ecosystem that includes all, no matter their shape, size, color, gender, background, disability, or beliefs.
        </p>
        <PrimaryButton><a href="https://www.anykey.org/en/pledge">Take the pledge!</a></PrimaryButton>
      </SubContainer>
      <SubContainer>
        <div className="heading">
            Join the ESL Staff today!
        </div>
        <p className="info-text">
        <img className="floating-image" src={staff} alt="staff wanted"/>
        We are looking for players who like to support their favorite game. If you like to help other people or have any other talent, apply to become a staff member. A friendly team likes to welcome you!
        </p>
        <PrimaryButton><a href="https://play.eslgaming.com/global/join-the-staff">Join the Staff!</a></PrimaryButton>
      </SubContainer>
    </Container>
  );
}

export default InfoPanels;
