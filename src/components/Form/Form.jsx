import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  background: #fff;
  border-radius: 3px;
`;

function Form() {
  return (
    <StyledForm method="post" />
  );
}

export default Form;
