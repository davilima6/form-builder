// @flow
import * as React from 'react';
import styled, { css } from 'styled-components';
import CONFIG from '../../config';
import { Field as TypeField, normalize } from '../../utils';
import { StyledError } from '../Form/Form';
import {
  DateWidget, EmailWidget, NumberWidget, RadioWidget, TextWidget,
} from '../widgets';

const Label = styled.label``;

const FieldWrapper = styled.div`
  margin: 1em 0 1.25em;
`;

const StyledInput = styled.input`
  box-sizing: border-box;
  font-size: 1em;
  padding: 3px 5px;
  width: 100%;
`;

const StyledLabel = styled.div`
  font-weight: 500;
  margin-bottom: 0.5em;
  text-transform: capitalize;
`;

const WidgetWrapper = styled.div`
  border-radius: 3px;
  padding: 0 1em;

  ${props => props.hasError
    && css`
      border: 1px solid var(--dark-red);
      padding: 1em;
      margin-top: 1em;
    `};
`;

function getWidgetByType(type: string) {
  switch (type) {
    case 'number':
      return NumberWidget;
    case 'text':
      return TextWidget;
    case 'email':
      return EmailWidget;
    case 'radio':
      return RadioWidget;
    case 'date':
      return DateWidget;
    default:
      throw new Error('Invalid widget');
  }
}

function getPropsByRules(props: {
  key: string,
  id: string,
  label: string,
  type: string,
  value: string | number,
  errors: {},
  errorMessages: {},
  onChangeField: Function,
}) {
  let newProps = {
    ...props,
  };

  switch (props.type) {
    case 'email':
      newProps = {
        ...props,
        placeholder: `your username${CONFIG.rules.email.domain}`,
      };
      break;
    default:
  }

  switch (props.id) {
    case 'gender':
      newProps = { ...props, choices: CONFIG.enums.gender };
      break;
    default:
  }

  return newProps;
}

const Field = React.memo<TypeField>((fieldProps: TypeField) => {
  const Widget = getWidgetByType(fieldProps.type);
  const widgetProps = getPropsByRules(fieldProps);

  return (
    <FieldWrapper>
      <Widget {...widgetProps} />
    </FieldWrapper>
  );
});

export default Field;
export {
  Label, StyledError, StyledInput, StyledLabel, WidgetWrapper,
};
