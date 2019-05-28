// @flow
import * as React from 'react';
import styled, { css } from 'styled-components';
import { errorMessages } from '../../utils/validators';

type Props = {
  floated?: string,
  onClick?: Function,
  primary?: boolean,
  disabled?: boolean,
  title: string,
  type?: string,
};

const StyledButton = styled.button`
  background-color: #fff;
  border: 1px solid var(--lite-grey);
  border-radius: 3px;
  font-size: 1em;
  margin-right: ${props => (props.floated === 'left' ? 'auto' : '0')};
  order: ${props => (props.floated === 'left' ? '0' : '1')};
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

  ${props => props.disabled
    && css`
      background-color: var(--lite-grey);
      border-color: var(--dark-grey);
      color: #000;
      cursor: not-allowed;

      :hover {
        background-color: var(--lite-grey);
      }
    `};
`;

function Button({
  floated, onClick, primary, disabled, title, type,
}: Props) {
  return (
    <StyledButton
      type={type}
      floated={floated}
      title={disabled ? errorMessages.isPristine() : title}
      primary={primary}
      disabled={disabled}
      onClick={onClick}
    >
      {title}
    </StyledButton>
  );
}

Button.defaultProps = {
  floated: null,
  onClick: () => {},
  primary: false,
  disabled: false,
  type: 'button',
};

export default Button;
