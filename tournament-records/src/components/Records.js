import styled from "styled-components";

import Record from "./Record";

const Container = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-top: 20px;
  font-family: "Open Sans",sans-serif;
  border-radius: 2px;
  h4,p {
    margin: 0;
    text-align: left;
  }
  .tournament-heading {
    display: flex;
    flex-direction: column;
    width: 100%;
    background: #FFFFFF;
    border-radius: 2px;
    border-top: 6px solid #28B662;
  }
  .tournament-name {
    width: 92%;
    font-size: 1.5em;
    font-weight: bold;
    color: #333333;
    line-height: 29px;
    margin: 15px auto;
    margin-bottom: 0;
    text-align: left;
  }
  .tournament-date {
    font-size: 0.875em;
    font-weight: normal
    color: #333333;
    line-height: 19px;
    width: 92%;
    margin: 0 auto;
    margin-bottom: 10px;
  }
  .tournament-records {
    margin-top: 20px;
    background: #FFFFFF;
    border-radius: 2px;
  }
  .date-containter {
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin: 0 auto;
  }
  .date-sort {
    font-size: 0.875em;
    display: flex;
    border: 2px solid #BDC3C7;
    border-radius: 2px;
    margin: 16px 0 0 0;
    height: 30px;
    width: 62px;
    justify-content: center;
    align-items: center;
  }
  .record-list {
      border-radius: 2px;
  }
`;

function Records() {
  return (
    <Container>
      <div className="tournament-heading">
        <h4 className="tournament-name">
            R6: Siege (PC) 5on5 Open Cup #55 Spain
        </h4>
        <p className="tournament-date">
            21st March 2018
        </p>
      </div>
      <div className="tournament-records">
        <div className="date-containter">
            <div className="date-sort">Date ▴</div>
        </div>
        <div className="record-list">
          <Record />  
          <Record />  
          <Record />  
          <Record />  
        </div>
      </div>
    </Container>
  );
}

export default Records;
