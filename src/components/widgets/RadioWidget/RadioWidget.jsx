// @flow
import * as React from 'react';
import styled, { css } from 'styled-components';
import { Choice, Error, normalize } from '../../../utils';

const { useCallback } = React;

const WidgetWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${props => props.error
    && css`
      border-color: var(--dark-red);
    `};
`;

const Label = styled.label`
  flex-grow: 0.1;
`;

const StyledLabel = styled.div`
  flex: 0 0 100%;
  font-weight: 500;
  margin-bottom: 0.5em;
`;

const StyledChoice = styled.div`
  font-weight: 300;
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
  choices: Array<Choice>,
  required?: boolean,
  value?: Choice,
  errors?: Array<Error>,
  onChangeField: Function,
};

const RadioWidget = ({
  id, label, choices, required, value, errors, onChangeField,
}: Props) => {
  const fieldId = `field-${id}`;

  const onChange = useCallback(
    ({ target }: SyntheticEvent<>) => {
      onChangeField(id, target.value);
    },
    [id, onChangeField],
  );

  return (
    <WidgetWrapper error={errors.length}>
      <StyledLabel>{label}</StyledLabel>
      {choices
        && choices.map((choice: Choice, enumKey: number) => {
          const fieldId = `field-${id}-${normalize(choice)}`;

          return (
            <Label htmlFor={fieldId} key={`${id}${choice}`}>
              <StyledChoice>{choice}</StyledChoice>
              <StyledInput
                type="radio"
                id={fieldId}
                name={id}
                value={enumKey}
                checked={value && enumKey === Number(value)}
                onChange={onChange}
              />
            </Label>
          );
        })}
      {errors.map(message => (
        <StyledError key={normalize(message)}>{message}</StyledError>
      ))}
    </WidgetWrapper>
  );
};
RadioWidget.defaultProps = {
  required: false,
  value: '',
  errors: [],
};

export default RadioWidget;
