import styled from "styled-components";

const ListItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-top: 0px;
  font-family: "Open Sans",sans-serif;
  background: #FFFFFF;
  border-radius: 2px;
  border-bottom: 1px solid #E2E5EA;
  padding-bottom: 10px;
  p {
      margin: 0;
  }
  .record-time {
    width: 91%;
    display: flex;
    flex-direction: flex-start;
    margin: 15px auto 5px auto;
    font-size: 0.875em;
    font-weight: normal;
    color: #818F8F;
    line-height: 19px;
    font-family: "Open Sans",sans-serif;
  }
  .team {
    display: flex;
    flex-direction: row;
    width: 90%;
    height: 1.5rem;
    margin: 5px auto;
    justify-content: space-between;
    color: #333333;
    border-radius: 2px 0 0 2px;
    font-size: 1em;
  }
  .team-name {
    margin: auto 0;
    padding-left: 5px;
  }
  .winner {
    border-left: 4px solid #28B662;
  }
  .loser {
    border-left: 4px solid #E43726;
  }
  .winner-score {
    
    font-size: 1.1em;
    font-weight: bold;
  }  
  .loser-score {
    font-size: 1.1em;
  }
`;

function Record() {
  return (
    <ListItem>
        <p className="record-time">
            12:51
        </p>
        <div className="team winner">
            <p className="team-name">Black Lotus</p>
            <p className="winner-score">4</p>
        </div>
        <div className="team loser">
            <p className="team-name">Team Chandra</p>
            <p className="loser-score">2</p>
        </div>
    </ListItem>
  );
}

export default Record;
