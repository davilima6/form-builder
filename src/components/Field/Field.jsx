// @flow
import * as React from 'react';
import styled from 'styled-components';
import CONFIG from '../../config';
import { Field as TypeField, normalize } from '../../utils';
import {
  DateWidget, EmailWidget, NumberWidget, RadioWidget, TextWidget,
} from '../widgets';

const FieldWrapper = styled.div`
  margin: 1em 0 1.25em;
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

function getPropsByRules(props: Object) {
  const fieldType = props.type;
  const fieldName = normalize(props.label);
  let newProps = {
    ...props,
  };

  switch (fieldType) {
    case 'number':
      newProps = { ...newProps, min: CONFIG.rules.age.min, max: CONFIG.rules.age.max };
      break;
    case 'text':
      newProps = { ...newProps, maxLength: CONFIG.rules.text.max };
      break;
    case 'email':
      newProps = {
        ...newProps,
        pattern: CONFIG.rules.email.pattern,
        maxLength: CONFIG.rules.email.pattern.length + CONFIG.rules.email.limit,
      };
      break;
    default:
  }

  switch (fieldName) {
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
