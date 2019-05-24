// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { useScrollToTop } from '../../utils';

const StyledFormSucess = styled.form`
  background-color: var(--lite-blue);
  height: 100vh;
  padding: 1em;
  text-align: center;
`;

const StyledButton = styled.button`
  border: 2px solid #000;
  border-radius: 3px;
  color: #000;
  cursor: pointer;
  display: inline-block;
  font-size: 1em;
  font-weight: bold;
  margin-top: 2em;
  padding: 0.5em 1em;
  text-decoration: none;

  :hover {
    background-color: var(--dark-green);
    color: #fff;
  }
`;

const FormSuccess = () => {
  useScrollToTop();

  return (
    <StyledFormSucess>
      <h2>Success!</h2>
      <p>Your data has been validated and sent to our team.</p>
      <p>Thank you for your submission.</p>
      <StyledButton as={Link} to="/">
        Try it again!
      </StyledButton>
    </StyledFormSucess>
  );
};

export default FormSuccess;
