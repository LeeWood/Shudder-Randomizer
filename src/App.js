import React from 'react';
import styled from "styled-components";
import { thing, thingLink } from './components/MovieCard';
import MovieData from "./movie_data.js";

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
  height: 70%;
  display: flex;
  align-items: center;
`;

let dataNum = MovieData.length;
const randomNum = () => {
  return Math.floor(Math.random() * dataNum);
}

const randomMovie = MovieData[randomNum()]; 
//MovieData[randomNum()] picks a random title from the data set.

function App() {
  console.log(randomMovie.title);
  console.log(randomNum());
  
  return (
    <MainDiv className="main-div">
    <MovieImg src = {thing} alt="movie cover"/>
    <Button onClick={() => {window.location.href=thingLink}}>Watch Now!</Button>
    </MainDiv>
  );
};
//this is a way to incorporate a button link that doesn't fire immediately as the DOM renders.
//TODO find a way to get it to open in a new tab?

export default App;
