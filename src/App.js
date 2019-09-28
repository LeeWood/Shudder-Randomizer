import React from 'react';
import logo from './logo.svg';
import styled from "styled-components";
import exports from './Button.js';

const WrapperDiv = styled.div`
  font-family: sans-serif;
  text-align center;
`;

const BlueText = styled.h1`
  color: royalblue;
`;
// function App() {
//   const logs = exports
//   console.log(logs.badWord);
//   return(
//     <div>This is a div</div>
    
//   );
// }

function App() {
  return (
    <WrapperDiv>
      <BlueText>Styled Components Playground</BlueText>
      <exports.Button type="primary" onClick={exports.sayHello}>Primary</exports.Button>
      <exports.Button type="success" onClick={exports.badWord}>Success</exports.Button>
      <exports.Button type="danger" onClick={exports.danger}>Danger</exports.Button>
      <exports.Button type="warning">Warning</exports.Button>
    </WrapperDiv>    
  );
}

export default App;
