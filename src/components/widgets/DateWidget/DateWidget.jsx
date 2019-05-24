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
  flex: 0 0 100%;
  font-weight: 500;
  margin-bottom: 0.5em;
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
  required?: boolean,
  value?: number,
  errors?: Array<string>,
  onChangeField: Function,
};

const DateWidget = ({
  id, label, required, value, errors, onChangeField,
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
          type="date"
          id={fieldId}
          name={id}
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

DateWidget.defaultProps = {
  required: false,
  value: '',
  errors: [],
};

export default DateWidget;
