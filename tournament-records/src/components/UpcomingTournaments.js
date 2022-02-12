import styled from "styled-components";

const Container = styled.div`
  width: 68%;
  display: ${prop => prop.searchQueried? "none" : "flex"};
  flex-direction: column;
  justify-content: flex-start;
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
    font-size: 1.3em;
    font-weight: 600;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 20px;
    width: 70%;
    background: #FFFFFF;
    border-radius: 2px;
    margin-top: 20px;
  }
`;

function UpcomingTournaments(props) {
    return (
        <Container searchQueried={props.searchQueried}>
            <div className="tournament-heading">
                Upcoming Tournaments
            </div>
        </Container>
    );
}

export default UpcomingTournaments;
