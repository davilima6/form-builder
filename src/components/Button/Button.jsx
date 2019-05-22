import * as React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button.attrs(({ float }) => ({ float }))`
  float: ${({ float }) => float};

  ${props => {
    if (props.primary) {
      debugger;
    }

    return (
      props.primary &&
      css`
        background-color: #000;
        color: #fff;
      `
    );
  }};
`;

type Props = {
  float?: string,
  primary?: undefined | null,
  title: string,
  type?: string,
};

function Button({ float, primary, title, type }: Props) {
  return (
    <StyledButton type={type} float={float} title={title} primary={primary}>
      {title}
    </StyledButton>
  );
}

Button.defaultProps = {
  float: null,
  primary: null,
  type: 'button',
};

export default Button;
