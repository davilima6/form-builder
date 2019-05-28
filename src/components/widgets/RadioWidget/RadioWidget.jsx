// @flow
import * as React from 'react';
import styled from 'styled-components';
import { Choice, Error as TypeError, normalize } from '../../../utils';
import {
  Label as LabelBase,
  StyledError,
  StyledInput,
  StyledLabel as StyledLabelBase,
  WidgetWrapper as WidgetWrapperBase,
} from '../..';

const { useCallback } = React;

const Label = styled(props => <LabelBase {...props} />)`
  flex-grow: 0.1;
`;

const StyledLabel = styled(props => <StyledLabelBase {...props} />)`
  flex: 0 0 100%;
`;

const StyledChoice = styled.div`
  font-weight: 300;
  margin-bottom: 0.5em;
  text-transform: capitalize;
`;

const WidgetWrapper = styled(props => <WidgetWrapperBase {...props} />)`
  display: flex;
  flex-wrap: wrap;
`;

type Props = {
  id: string,
  label: string,
  choices: Array<Choice>,
  value?: Choice,
  errors?: Array<TypeError>,
  onChangeField: Function,
};

const RadioWidget = ({
  id, label, choices, value, errors, onChangeField,
}: Props) => {
  const onChange = useCallback(
    ({ target }: SyntheticEvent<>) => {
      onChangeField(id, target.value);
    },
    [id, onChangeField],
  );

  return (
    <WidgetWrapper hasError={errors.length > 0}>
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
  value: '',
  errors: [],
};

export default RadioWidget;
