import styled from "styled-components";

import eslLogo from "../assets/eslLogo.png"

const Container = styled.div`
  width: 100%;
  height: 15em;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-align: left;
  margin-top: 20px;
  font-family: "Open Sans",sans-serif;
  background: #FFFFFF;
  border-top: 2px solid #28B662;
  font-size: 0.76rem;
  font-weight: normal;
  .partition {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin-bottom: -40px;
  }
  .footer-text {
    width: 30%;
    margin-left: 20px;
  }
  .trademark {
    padding-top: 60px;
    text-align: center;
    margin-bottom: 10px;
  }
`;

function Footer() {
    return (
        <Container>
            <div className="partition">
                <img src={eslLogo} alt="esl logo" />
                <div className="footer-text">
                    ESL Play is the world's largest independent league for esports. Established in 1997, we're proud to be the home to those who love competitive gaming.
                </div>
            </div>
            <div className="trademark">
                ESL is a brand of ESL Gaming GmbH. © 2022.
            </div>
        </Container>
    );  
}

export default Footer;
