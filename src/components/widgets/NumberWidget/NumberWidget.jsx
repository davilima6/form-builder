// @flow
import * as React from 'react';
import styled, { css } from 'styled-components';
import { normalize } from '../../../utils';

const { useCallback } = React;

const WidgetWrapper = styled.div`
  ${props => props.error
    && css`
      border-color: var(--dark-red);
    `};
`;

const Label = styled.label``;

const StyledLabel = styled.div`
  font-weight: 500;
  margin-bottom: 0.5em;
  text-transform: capitalize;
`;

const StyledInput = styled.input`
  font-size: 1em;
  padding: 3px 5px;
  width: 100%;
`;

const StyledError = styled.div`
  border: 1px dashed red;
`;

type Props = {
  id: string,
  label: string,
  min?: number,
  max?: number,
  required?: boolean,
  value?: number,
  errors?: Array<string>,
  onChangeField: Function,
};

const NumberWidget = ({
  id, label, min, max, required, value, errors, onChangeField,
}: Props) => {
  const fieldId = `field-${id}`;

  const onChange = useCallback(({ target }: SyntheticEvent<>) => onChangeField(id, target.value), [
    id,
    onChangeField,
  ]);

  return (
    <WidgetWrapper error={errors.length}>
      <Label htmlFor={fieldId}>
        <StyledLabel>{label}</StyledLabel>
        <StyledInput
          type="number"
          id={fieldId}
          name={id}
          min={min}
          max={max}
          required={required}
          value={value}
          onChange={onChange}
        />
      </Label>
      {errors.map(message => (
        <StyledError key={normalize(message)}>{message}</StyledError>
      ))}
    </WidgetWrapper>
  );
};

NumberWidget.defaultProps = {
  max: null,
  min: null,
  required: false,
  value: '',
  errors: [],
};

export default NumberWidget;
