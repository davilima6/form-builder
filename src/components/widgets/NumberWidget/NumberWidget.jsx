// @flow
import * as React from 'react';
import { normalize } from '../../../utils';
import {
  Label, StyledError, StyledInput, StyledLabel, WidgetWrapper,
} from '../..';

const { useCallback } = React;

type Props = {
  id: string,
  label: string,
  value?: number,
  errors?: Array<string>,
  onChangeField: Function,
};

const NumberWidget = ({
  id, label, value, errors, onChangeField,
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
        <StyledInput type="number" id={fieldId} name={id} value={value} onChange={onChange} />
      </Label>
      {errors.map(message => (
        <StyledError key={normalize(message)}>{message}</StyledError>
      ))}
    </WidgetWrapper>
  );
};

NumberWidget.defaultProps = {
  value: '',
  errors: [],
};

export default NumberWidget;
