import React from 'react';
import styled from 'styled-components';
import { Form } from '../';

const StyledFormContainer = styled.section`
  background: #fff;
`;

function FormContainer() {
  return (
    <StyledFormContainer>
      <Form />
    </StyledFormContainer>
  );
}

export default FormContainer;
