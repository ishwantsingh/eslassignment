import React from 'react'
import styled from 'styled-components';

import loader from "../assets/loader.svg"

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  .loader {
    position: fixed;
    left: 15vw;
    top: 8vh;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90vw;
    height: 100vh;
    margin-left: -15rem;
 }
`;

const Image = styled.img`
    width: 200px;
    height: 200px;
`
const Spinner = () => {
    return (
        <Container>
            <div className="loader">
                    <Image src={loader}/>
            </div>
      </Container> 
    )
}

export default Spinner;