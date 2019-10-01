import React from 'react';
import styled from 'styled-components';
import MovieCard from './components/MovieCard.js';
import MovieData from './movie_data.js';
import { Header, Footer, Logo } from './pageElements';

const MovieImg = styled.img`
  width: 250px;
  margin-left: 500px;
  margin-top: 100px;
`;

const Button = styled.button`
  margin-left: 10px;
  height: 40px;
  justify-self: flex-end;
`;

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 97vh;
  width: 100%
  
`;

//I COULD NOT get this to display at 100% height for some reason...what worked was using the vh (view height) unit.



//MovieData[randomNum()] picks a random title from the data set.

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

//TODO find a way to get it to open in a new tab?
//TODO add buttons and landing page using the stuff from this week's TK material!!
//TODO replace dummy text with mdb api stuff
export default App;
