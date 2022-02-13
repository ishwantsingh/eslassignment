import styled from "styled-components";
import moment from "moment";

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
    padding-left: 5px;
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
    margin: 6px auto;
    justify-content: space-between;
    color: #333333;
    border-radius: 2px 0 0 2px;
    font-size: 0.95em;
  }
  .team-name {
    margin: auto 7px;
    padding-left: 5px;
  }
  .winner {
    border-left: 4px solid #28B662;
  }
  .loser {
    border-left: 4px solid #E43726;
  }
  .winner-score {
    font-size: 1.2em;
    font-weight: bold;
  }  
  .loser-score {
    font-size: 1.1em;
  }
`;

function Record(props) {
  if(props.isLoading) {
    return (
      <div>
        Loading...
      </div>
    )
  } else if(props.contestants && props.match) {

    let contestantsArray = props.contestants;

    let contestant1 = contestantsArray.find(contestant => contestant.id === props.match.participants[0].id);
    let contestant2 = contestantsArray.find(contestant => contestant.id === props.match.participants[1].id);

    let score1 = props.match.participants[0].points[0]
    let score2 = props.match.participants[1].points[0]
    if (score1 > score2) {
      var winner = contestant1;
      var loser = contestant2;
      var winnerScore = score1;
      var loserScore = score2;
    } else {
      var winner = contestant2;
      var loser = contestant1;
      var winnerScore = score2;
      var loserScore = score1;
    }
      return (
        <ListItem>
            <p className="record-time">
              {props.match? moment(props.match.beginAt).format('LT'): "12:51"}
            </p>
            <div className="team winner">
                <p className="team-name">{winner? winner["name"]:"Deleted Account"}</p>
                <p className="winner-score">{winnerScore}</p>
            </div>
            <div className="team loser">
                <p className="team-name">{loser? loser["name"]: "Deleted Account"}</p>
                <p className="loser-score">{loserScore}</p>
            </div>
        </ListItem>
      );
  } else {
    return <div>Loading...</div>
  }
}

export default Record;
