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
  placeholder?: string,
  value?: string,
  errors?: Array<string>,
  onChangeField: Function,
};

const EmailWidget = ({
  id, label, placeholder, value, errors, onChangeField,
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
          type="email"
          id={fieldId}
          name={id}
          placeholder={placeholder}
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

EmailWidget.defaultProps = {
  placeholder: null,
  value: '',
  errors: [],
};

export default EmailWidget;
