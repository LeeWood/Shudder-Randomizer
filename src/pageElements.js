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
  justify-content: center;
  width: 100%;
  height: 10%;
`;

export const Footer = styled.footer`
  color: white;
  font-family: ${infoFont};
  font-size: .75rem;
  
`;


