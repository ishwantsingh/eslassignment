import styled from "styled-components";

const StyledSearchBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 6px);
  padding: 16px 0;
  background-color: white;
  border-radius: 2px;
  margin-top: 20px;
  padding-bottom: 36px;
  border-left: 6px solid #28B662;
  .image1 {
    margin: 0 auto;
    width: 100%;
  }
  .seachBar {
    margin: 0 auto;
  }
  .tournament-heading {
    font-size: 1.3em;
    font-weight: 600;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 4px 0 16px 20px;
    width: 70%;
    background: #FFFFFF;
    border-radius: 2px;
    align-self: flex-start;
  }
`;

const StyledInput = styled.div`
  display: flex;
  width: 94%;
  justify-content: center;
`;

const SearchInput = styled.input`
  height: 40px;
  width: 75%;
  background-color: rgb(250, 250, 250);
  border: 1px solid rgb(230, 230, 230);
  border-radius: 3px;
  margin: 0em auto;
  margin-left: 10px;
  padding: 0px;
  display: flex;
  align-self: flex-start;
  text-align: center;
`;

const SearchButton = styled.button`
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  color: #454116;
  font-size: 0.9em;
  height: 40px;
  width: 11.5vw;
  padding: 0em 4vw;
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
    font-size: 0.95em;
  }
`

function SearchBar(props) {
  return (
    <StyledSearchBar>
      <div className="tournament-heading">
        Find Tournament Records
      </div>
      <StyledInput>
        <SearchInput
          type="text"
          placeholder="Enter Tournament/League ID"
          id="search-bar"
        />
        <SearchButton onClick={e => props.searchItems(e)}>Search</SearchButton>
      </StyledInput>
    </StyledSearchBar>
  );
}

export default SearchBar;