// @flow
import * as React from 'react';
import styled, { css } from 'styled-components';
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

const TextWidget = ({
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
        <StyledInput type="text" id={fieldId} name={id} value={value} onChange={onChange} />
      </Label>
      {errors.map(message => (
        <StyledError key={normalize(message)}>{message}</StyledError>
      ))}
    </WidgetWrapper>
  );
};

TextWidget.defaultProps = {
  value: '',
  errors: [],
};

export default TextWidget;
