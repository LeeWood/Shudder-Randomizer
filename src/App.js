import React from 'react';
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

const Smallimg = styled.img`
  width: 200px;
`;

function App() {
  return (
    <WrapperDiv>
      <BlueText>Styled Components Playground</BlueText>
      <exports.Button type="primary" onClick={exports.sayHello}>Primary</exports.Button>
      <exports.Button type="success" onClick={exports.badWord}>Success</exports.Button>
      <exports.Button type="danger" onClick={exports.danger}>Danger</exports.Button>
      <exports.Button type="warning">Warning</exports.Button>

      <Smallimg src='https://previews.dropbox.com/p/thumb/AAkmKcx_tn2D_qP8hYoVyobkEQNYgE5dcLR6wUmm38fCl8U7XFHsisH0QDVuBGsGJ_xrpJnKvlhv8K95fSDePAXj3Tl7Cm0zLngXWewxtXxMiZue1ym3Y31rC2A14NmRsgL4qo9L7RKZoJ61QiDEOREicEO3vOblMoT_PBnSfCHHfDXAIjHAoT1TzGcRA7ObN0eOYyuxWC4DFQGmoGF28gWFLy9xVlpkMQJGtxL9JKb2GTcfWuH5lEJp5QL0IHCYsTHE8Ou6Doxnfp0vQhRTHDbZkIy-HBXROcOCw6ftN5Zbl9YyX-lAGUTpnz-agt9pF_ld6KLwIsQFrHycmtVIhBWyh9nVcLLfJwKNgArWsCe7qw/p.jpeg?fv_content=true&size_mode=5' alt='movie cover' />
    </WrapperDiv>    
  );
}

export default App;
