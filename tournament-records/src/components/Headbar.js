import menuImage from "../assets/menu.png"
import styled from "styled-components";

const Header = styled.div`
  width: 100%;
  margin: 0;
  text-align: center;
  display: initial;
  // display: flex;
  flex-direction: column;
  justify-content: center;
  background: #1D1D1B;
  line-height: 1.15;
  .head-banner {
    display: flex;
    height: 41px;
    flex-direction: row;
    justify-content: center;
    color: #FFFFFF;
    background: #1D1D1B;
    margin: 0 auto;
    padding: 0 1vw;
    font-size: 14px;
    font-family: "Calps Sans",sans-serif;
    font-weight: 500;
  }
  .menu-image {
    display: flex;
    align-self: center;
    padding-bottom: 2px;
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

const StickyNavbar = styled.div`
  width: 100%;
  height: 48px;
  margin-bottom: 0;
  text-align: center;
  display: inline-block;
  background: #FFFFFF;
  position: sticky;
  top: 0;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 20%);
  .sub-container {
    width: 80%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }
  .esplay-logo {
      width: 136px;
      height: 48px;
      padding: 8px 0;
      float: left;
      margin-right: 0;
      // overflow: hidden;
    }
    .history {
      display: flex;
      flex-direction: row;
    }
    .empty {
      width: 0%;
    }
    .menu {
      width: 18%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
    .heading {
      display: flex;
      align-items: center;
      padding-left: 10px;
      margin-left: 15px;
      border-left: 1px solid black;
      width: 20rem;
      height: 50%
      font-size: 1.14rem;
      font-weight: 500;
    }
    .secondary-button {
      border: 0;
      background: 0;
      font-family: font-family: "Open Sans",sans-serif;
      color: #454116;
      font-size: 0.875em;
    }
    .primary-button {
      font-family: font-family: "Open Sans",sans-serif;
      color: #454116;
      font-size: 0.875em;
      padding: 0.5em 1em;
      line-height: 48px;
      background: #F5E000;
      border-radius: 3px;
      border: 2px solid #F5E000;
      cursor: pointer;
      vertical-align: middle;
      line-height: 1;
      text-align: center;
      text-decoration: none;
      font-weight: 500;
      // overflow: hidden;
      box-shadow: 0 0 0 1px rgb(0 0 0 / 20%);
    }
`



function Headbar() {
  return (
      <Header>
        <div className="head-banner">
          <img src={menuImage} className="menu-image" alt="menu"/>
          <p><span className='highlighted-text'>ESL Play</span> is part of the ESL Gaming Network</p>
        </div>
        <StickyNavbar>
          <div className="sub-container">
            <div className="history">
              <svg className="eslplay-logo" viewBox="0 0 185 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M123.52 33H126.67V25.53H131.035C134.905 25.53 138.505 22.83 138.505 17.385V13.155C138.505 7.89 134.905 5.19 131.035 5.19H123.52V33ZM135.355 17.205C135.355 20.76 132.97 22.515 130.81 22.515H126.67V8.205H130.81C132.97 8.205 135.355 9.915 135.355 13.47V17.205ZM142.856 33H146.006V5.19H142.856V33ZM162.19 26.205C162.19 28.815 160.48 30.345 157.96 30.345C155.935 30.345 153.955 29.31 153.955 25.53V19.77C153.955 15.99 155.935 14.955 157.96 14.955C160.48 14.955 162.19 16.485 162.19 19.095V26.205ZM165.34 33V12.3H162.64L162.19 13.83C160.21 12.075 158.59 12.075 157.51 12.075C154.045 12.075 150.805 13.56 150.805 19.32V25.98C150.805 31.74 154.045 33.225 157.51 33.225C158.59 33.225 160.21 33.225 162.19 31.47L162.64 33H165.34ZM176.891 40.02L184.226 12.3H181.121L176.756 28.5L171.986 12.3H168.791L175.316 33.945L173.741 40.02H176.891Z" fill="#1D1D1B"></path>
                <path fillRule="evenodd" clipRule="evenodd" d="M111.36 32.9513V26.4271H98.4105V4.92499H91.093V26.4275C91.093 30.0304 93.9597 32.9513 97.4957 32.9513H111.36Z" fill="black"></path>
                <path fillRule="evenodd" clipRule="evenodd" d="M80.1134 15.9657H73.4913V11.4488H87.1251V4.92499H74.433C69.8717 4.92499 66.1738 8.69284 66.1738 13.3405C66.1738 17.9882 69.8717 21.756 74.433 21.756H81.131V26.4271H67.4969V32.9513H80.1134C84.7183 32.9513 88.4504 29.1466 88.4485 24.4549C88.4465 19.766 84.7152 15.9657 80.1134 15.9657Z" fill="black"></path>
                <path fillRule="evenodd" clipRule="evenodd" d="M41.2544 26.4275C41.2544 30.0304 44.1211 32.9513 47.657 32.9513H63.266V26.4271H48.5719V21.7564H62.3017V15.9661H48.5719V11.4492H63.266V4.92499H47.6524C44.1187 4.92499 41.2544 7.84395 41.2544 11.4441V26.4275Z" fill="black"></path>
                <path fillRule="evenodd" clipRule="evenodd" d="M1 19.1117C1 28.5621 8.51905 36.2231 17.7938 36.2231C27.0686 36.2231 34.5877 28.5621 34.5877 19.1117C34.5877 9.66139 27.0686 2 17.7938 2C8.51905 2 1 9.66139 1 19.1117Z" fill="black"></path>
                <path fillRule="evenodd" clipRule="evenodd" d="M5.79224 25.6C6.21599 26.4017 6.71368 27.157 7.27675 27.8552L26.6723 8.09255C24.4473 6.23103 21.6397 5.06733 18.5707 4.92499L5.79224 25.6ZM9.25109 29.8551C9.94178 30.4273 10.6873 30.9316 11.4796 31.3598L31.7028 18.3831C31.5802 15.2504 30.4514 12.3822 28.6353 10.1043L9.25109 29.8551ZM14.7495 32.614C23.5406 34.6072 30.1615 28.2721 31.404 21.9274L14.7495 32.614Z" fill="white"></path>
              </svg>
              <p className="heading">Tournament Records</p>
            </div>
            <div className="empty">

            </div>
            <div className="menu">
              <button className="secondary-button">Help</button>
              <button className="secondary-button">Search</button>
              <button className="primary-button">Log in/Register</button>
            </div>
          </div>
        </StickyNavbar>
      </Header>
  );
}

export default Headbar;
