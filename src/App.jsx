import React from 'react';
import styled from 'styled-components';
import { FormContainer } from './components';

const StyledApp = styled.div`
  background: url('./bg.png');
`;

const AppHeader = styled.header`
  align-items: center;
  background-color: var(--lite-green);
  color: white;
  display: flex;
  flex-direction: column;
  font-size: calc(10px + 2vmin);
  justify-content: center;
  min-height: 20vh;
`;

const AppMain = styled.main`
  min-height: 80vh;
`;

function App() {
  return (
    <StyledApp>
      <AppHeader>
        <h1>Dynamic Form Builder</h1>
      </AppHeader>
      <AppMain />
    </StyledApp>
  );
}

export default App;
