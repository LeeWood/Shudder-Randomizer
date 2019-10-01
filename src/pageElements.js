import React from 'react';
import styled from 'styled-components';

//variables
const mainRed = "#DA0000";
const featureFont = "Bahiana";
const infoFont = "Roboto";

export const Header = styled.header`
  color: ${mainRed};
  font-family: ${featureFont}; 
  font-size: 2.5rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 55%;
  height: 20%;
  margin-top: 15px;
  p {
    font-size: 2.75rem;
    margin: 0;
  }
`;

export const Logo = styled.img`
  height: 70%;
`;


export const Footer = styled.footer`
  color: white;
  font-family: ${infoFont};
  font-size: .75rem;
  width: 60%;
  display: flex;
  justify-content: center;
  .last-thing {
    margin-left: 40%;
  }
  
`;


