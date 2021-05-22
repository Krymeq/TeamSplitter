import React from 'react';
import styled from 'styled-components';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Main } from './components/Main';

const Root = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

function App() {
  return (
    <Root>
      <Header />
      <Main />
      <Footer />
    </Root>
  );
}

export default App;
