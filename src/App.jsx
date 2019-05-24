import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import { FormContainer, FormSuccess } from './components';

const StyledApp = styled.div`
  background: url('./bg.png');
`;

const AppHeader = styled.header`
  align-items: center;
  background-color: var(--dark-green);
  color: #fff;
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
      <AppMain>
        <Switch>
          <Route exact path="/" component={FormContainer} />
          <Route path="/success" component={FormSuccess} />
        </Switch>
      </AppMain>
    </StyledApp>
  );
}

export default App;
