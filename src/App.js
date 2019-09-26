import React from 'react';
import logo from './logo.svg';
import styled from "styled-components";
import Button from './Button.js';

const WrapperDiv = styled.div`
  font-family: sans-serif;
  text-align center;
`;

const BlueText = styled.h1`
  color: royalblue;
`;


function App() {
  return (
    <WrapperDiv>
      <BlueText>Styled Components Playground</BlueText>
      <Button type="primary">Primary</Button>
      <Button type="success">Success</Button>
      <Button type="danger">Danger</Button>
      <Button type="warning">Warning</Button>
    </WrapperDiv>    
  );
}

export default App;
