// @flow
import * as React from 'react';
import styled, { css } from 'styled-components';
import spinner from './spinner.svg';

const SpinnerWrapper = styled.div`
  text-align: center;
`;

const StyledSpinner = styled.img`
  ${props => props.size
    && css`
      height: ${props.size}px;
      width: ${props.size}px;
    `}
`;

type Props = {
  size?: number,
};

const Spinner = ({ size }: Props) => (
  <SpinnerWrapper>
    <StyledSpinner size={size} src={spinner} alt="Loading..." />
  </SpinnerWrapper>
);

Spinner.defaultProps = {
  size: 200,
};

export default Spinner;
