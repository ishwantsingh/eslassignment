import styled from "styled-components";

const Container = styled.div`
  width: 68%;
  display: ${prop => prop.searchQueried? "none" : "flex"};
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-top: 20px;
  font-family: "Open Sans",sans-serif;
  border-radius: 2px;
  background: #FFFFFF;
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

function UpcomingTournaments(props) {
    return (
        <Container searchQueried={props.searchQueried}>
            <div className="tournament-heading">
                <h4 className="tournament-name">
                    matches
                </h4>
            </div>
        </Container>
    );
}

export default UpcomingTournaments;
