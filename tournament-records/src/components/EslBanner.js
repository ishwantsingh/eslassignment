import styled from "styled-components";

const Container = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
  margin-top: 25px;
  font-family: "Open Sans",sans-serif;
  border-radius: 2px;
  background: #FFFFFF;
  padding-top: 15px;
  padding-bottom: 40px;
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
    padding-left: 27px;
  }
  .heading {
    display: inline-block;
    font-size: 1.15em;
    border-bottom: 2px solid #1D1D1B;
    font-weight: normal;
    font-family: "Open Sans",sans-serif;
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
      align-items: center;
      margin-top: 30px;
      font-size: 1em;
      .svg-icon {
        width: 2.2em;
        height: 2.2em;
        cursor: pointer;
      }
      
      .svg-icon path,
      .svg-icon polygon,
      .svg-icon rect {
        fill: #1D1D1B;
      }
      
      .svg-icon circle {
        stroke: #1D1D1B;
        stroke-width: 1;
      }
  }
  .link:hover {
    text-decoration: underline;
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
          <a className="social" href="https://twitter.com/ESLPlay">
            <svg className="svg-icon" viewBox="0 0 20 20">
              <path fill="none" d="M18.258,3.266c-0.693,0.405-1.46,0.698-2.277,0.857c-0.653-0.686-1.586-1.115-2.618-1.115c-1.98,0-3.586,1.581-3.586,3.53c0,0.276,0.031,0.545,0.092,0.805C6.888,7.195,4.245,5.79,2.476,3.654C2.167,4.176,1.99,4.781,1.99,5.429c0,1.224,0.633,2.305,1.596,2.938C2.999,8.349,2.445,8.19,1.961,7.925C1.96,7.94,1.96,7.954,1.96,7.97c0,1.71,1.237,3.138,2.877,3.462c-0.301,0.08-0.617,0.123-0.945,0.123c-0.23,0-0.456-0.021-0.674-0.062c0.456,1.402,1.781,2.422,3.35,2.451c-1.228,0.947-2.773,1.512-4.454,1.512c-0.291,0-0.575-0.016-0.855-0.049c1.588,1,3.473,1.586,5.498,1.586c6.598,0,10.205-5.379,10.205-10.045c0-0.153-0.003-0.305-0.01-0.456c0.7-0.499,1.308-1.12,1.789-1.827c-0.644,0.28-1.334,0.469-2.06,0.555C17.422,4.782,17.99,4.091,18.258,3.266"></path>
            </svg>
          </a>
          <a className="social" href="https://fb.com/ESL">
            <svg className="svg-icon" viewBox="0 0 20 20">
              <path fill="none" d="M11.344,5.71c0-0.73,0.074-1.122,1.199-1.122h1.502V1.871h-2.404c-2.886,0-3.903,1.36-3.903,3.646v1.765h-1.8V10h1.8v8.128h3.601V10h2.403l0.32-2.718h-2.724L11.344,5.71z"></path>
            </svg>
          </a>
          <a className="social" href="https://www.youtube.com/ESL">
            <svg xmlns="http://www.w3.org/2000/svg" className="svg-icon" viewBox="0 0 576 512"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>
          </a>
          <a className="social" href="https://www.twitch.tv/team/esl/">
            <svg xmlns="http://www.w3.org/2000/svg" className="svg-icon" viewBox="0 0 512 512"><path d="M391.17,103.47H352.54v109.7h38.63ZM285,103H246.37V212.75H285ZM120.83,0,24.31,91.42V420.58H140.14V512l96.53-91.42h77.25L487.69,256V0ZM449.07,237.75l-77.22,73.12H294.61l-67.6,64v-64H140.14V36.58H449.07Z"/></svg>
          </a>
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
