// @flow
import * as React from 'react';
import styled, { css } from 'styled-components';

type Props = {
  floated?: string,
  primary?: boolean,
  title: string,
  type?: string,
};

const StyledButton = styled.button.attrs(({ floated }) => ({
  floated,
}))`
  background-color: #fff;
  border: 1px solid var(--lite-grey);
  border-radius: 3px;
  font-size: 1em;
  margin-right: ${({ floated }) => (floated === 'left' ? 'auto' : '0')};
  order: ${({ floated }) => (floated === 'left' ? '0' : '1')};
  padding: 0.5em 2em;

  :active {
    border-color: #000;
  }

  ${props => props.primary
    && css`
      background-color: var(--dark-green);
      border-color: var(--dark-green);
      color: #fff;
      cursor: pointer;
      font-weight: 500;

      :hover {
        background-color: var(--lite-green);
        color: #000;
      }
    `};
`;

function Button({
  floated, primary, title, type,
}: Props) {
  return (
    <StyledButton type={type} floated={floated} title={title} primary={primary}>
      {title}
    </StyledButton>
  );
}

Button.defaultProps = {
  floated: null,
  primary: false,
  type: 'button',
};

export default Button;
