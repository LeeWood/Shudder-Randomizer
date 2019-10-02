import React from 'react';
import styled from 'styled-components';
import MovieCard from './components/MovieCard.js';
import { Header, Footer, Logo } from './pageElements';


const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 97vh;
  width: 100%
  
`;

//I COULD NOT get this to display at 100% height for some reason...what worked was using the vh (view height) unit.



function App() {
  
  return (
    <MainDiv className='app container'>

      <Header>
        <Logo src='https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600/sh/shudder-logo-flat.png' alt="shudder logo"/>
        <p>(Random Movie Generator)</p>
      </Header>

      <MovieCard />

      <Footer>
        
        <p>About</p> 
        <p className="last-thing">Aleesha Wood 2019</p>      
        
      </Footer>
    </MainDiv>
  );
};

//TODO edit buttons and add landing page using the stuff from this week's TK material!!
//TODO replace dummy text with mdb api stuff
//??make cover art bigger again??
export default App;
