import logo from './logo.svg';
import React from 'react';
import styled from 'styled-components'
import Nav from './components/Nav';
import Home from './components/Home';

const AppContainer = styled.div`
height: 100vh;
background: black;
`
function App() {
  return (
   <AppContainer>
     <Home />
   </AppContainer>
  );
}

export default App;
