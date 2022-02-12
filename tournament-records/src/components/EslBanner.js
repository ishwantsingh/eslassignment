import styled from "styled-components";

const Container = styled.div`
  width: 30%;
  display:"flex";
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-top: 20px;
  font-family: "Open Sans",sans-serif;
  border-radius: 2px;
  background: #FFFFFF;
  border-bottom: 6px solid #28B662;
  h4,p {
    margin: 0;
    text-align: left;
  }
  .partition {
    width: 80%;
    font-size: 1em;
    font-weight: bold;
    color: #333333;
    line-height: 29px;
    margin: 25px auto;
    margin-bottom: 0;
    text-align: left;
  }
  a {
    color: #2B36F2;
    font-size: 0.875em;
    font-weight: normal;
    text-decoration: none;
  }
  ul.links-list {
    list-style-type: disc;
  }
  .heading {
    display: inline-block;
    font-size: 1.25rem;
    border-bottom: 2px solid #1D1D1B;
    font-weight: normal;
    font-family: "Open Sans",sans-serif;
    margin-top: 10px;
  }
  .record-list {
      border-radius: 2px;
  }
  .socials {
      display: flex;
      flex-direction: row;
      font-size: 0.875em;
      text-decoration: initial;
      justify-content: space-around;
  }
`;

function EslBanner(props) {
    return (
        <Container>
            <div className="partition">
                <h4 className="heading">
                   Follow ESL
                </h4>
                <div className="socials">
                    <p className="social">
                        Twit
                    </p>
                    <p className="social">
                        Fb
                    </p>
                    <p className="social">
                        Yt
                    </p>
                    <p className="social">
                        Twth
                    </p>
                </div>

            </div>
            <div className="partition">
                <h4 className="heading">
                   Portals in Global
                </h4>
                <ul className="links-list">
                    <li className="link">
                        <a href="https://play.eslgaming.com/global/cups">More Tournaments</a>
                    </li>
                    <li className="link">
                        <a href="https://play.eslgaming.com/global/join-the-staff">Join the ESL Staff</a>
                    </li>
                </ul>
            </div>
            <div className="partition">
                <h4 className="heading">
                   {`Help & Support`}
                </h4>
                <ul className="links-list">
                    <li className="link">
                    <a href="https://play.eslgaming.com/help">{`Help & Support Portal`}</a>
                    </li>
                </ul>
            </div>
            <div className="partition">
                <h4 className="heading">
                   ESL Play Products
                </h4>
                <ul className="links-list">
                    <li className="link">
                        <a href="https://play.eslgaming.com/play-app">Mobile App</a>
                    </li>
                    <li className="link">
                        <a href="https://play.eslgaming.com/ps-dashboard">Playstation Tournaments</a>
                    </li>
                    <li className="link">
                        <a href="https://play.eslgaming.com/premium">Premium</a>
                    </li>
                    <li className="link">
                    <a href="https://play.eslgaming.com/trusted">Trusted</a>
                    </li>
                </ul>
            </div>
            <div className="partition">
                <h4 className="heading">
                   ESL Network
                </h4>
                <ul className="links-list">
                    <li className="link">
                    <a href="https://intelextrememasters.com/">Intel Extreme Masters</a>
                    </li>
                    <li className="link">
                    <a href="https://www.esl-one.com/">ESL One</a>
                    </li>
                    <li className="link">
                    <a href="https://pro.eslgaming.com/">Pro Leagues</a>
                    </li>
                </ul>
            </div>
        </Container>
    );  
}

export default EslBanner;
