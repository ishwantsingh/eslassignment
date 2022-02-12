import styled from "styled-components";

const StyledSearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 16px 0;
  background-color: white;
  border-radius: 2px;
  margin-top: 20px;
  .image1 {
    margin: 0 auto;
    width: 100%;
  }
  .seachBar {
    margin: 0 auto;
  }
`;

const StyledInput = styled.div`
  display: flex;
  width: 94%;
  justify-content: center;
`;

const SearchInput = styled.input`
  height: 40px;
  width: 70%;
  background-color: rgb(250, 250, 250);
  border: 1px solid rgb(230, 230, 230);
  border-radius: 3px;
  margin: 0em auto;
  padding: 0px;
  display: flex;
  align-self: flex-start;
  text-align: center;
`;

const SearchButton = styled.button`
    font-family: "Open Sans",sans-serif;
    color: #454116;
    font-size: 0.9em;
    padding: 0.5em 5em;
    line-height: 48px;
    background: #ffeb09;
    border-radius: 3px;
    border: 2px solid #ffeb09;
    cursor: pointer;
    vertical-align: middle;
    line-height: 1;
    text-align: center;
    text-decoration: none;
    font-weight: 500;
    box-shadow: 0 2px 2px rgb(0 0 0 / 15%);
`

function SearchBar(props) {
  return (
    <StyledSearchBar>
      <StyledInput>
        <SearchInput
          type="text"
          placeholder="Type Tournament/League ID"
        //   onKeyDown={props.searchItems} //runs search function in App.js on each key press
        />
        <SearchButton>Search</SearchButton>
      </StyledInput>
    </StyledSearchBar>
  );
}

export default SearchBar;