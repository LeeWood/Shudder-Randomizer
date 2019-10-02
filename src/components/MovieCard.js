import React from "react";
import MovieData from "../movie_data.js";
import styled from "styled-components";
import {elemntVars} from "../pageElements.js"

//styles//
const CardDiv = styled.div`
  width: 60%;
  height: 100%;
  align-items: flex-start;
  color: white;
  display: flex;
  justify-content: space-evenly;
  margin-top: 5%;
`;
const MovieCover = styled.img`
  height: 350px;
  border-radius: 8px;
  
`;
const TextInfo = styled.div`
  width: 330px;
  align-self: flex-start;
`;
const TitlePara = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1.75rem;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  button {
    width: 125px;
    height: 45px;
    background-color: transparent; 
    border: 2px solid ${elemntVars.mainRed};
    border-radius: 15px;
    color: ${elemntVars.mainRed};
    font-family: ${elemntVars.featureFont};
    font-size: 30px;
  }
    button:focus {
      outline: transparent;
      box-shadow: 1px 1px;
    }
`;


const randomNum = () => {
  let dataNum = MovieData.length;
  return Math.floor(Math.random() * dataNum);
}

const randomMovie = MovieData[randomNum()]; 
const visitPage = () => {
  window.location=randomMovie.url;
}

const MovieCard = () => {
  
  return (
    <CardDiv>
      <MovieCover src={randomMovie.cover} />

      <TextInfo>
        <TitlePara className="title">
          {randomMovie.title}
        </TitlePara>
        
        <p className="info">
        Science fiction is often said to generate a "sense of wonder."  Science fiction editor and critic David Hartwell wrote: "Science fiction’s appeal lies in combination of the rational, the believable, with the miraculous. It is an appeal to the sense of wonder." Max Gladstone defined "hard" science fiction as stories "where the math works," but pointed out that this ends up with stories that often seem "weirdly dated," as scientific paradigms shift over time.
        </p>

        <ButtonContainer>
          <button type="submit" onClick={ () => {visitPage()}}>watch</button>
          <button>pick again</button>

        </ButtonContainer>
      </TextInfo>
    </CardDiv>
  );
};

export default MovieCard;



