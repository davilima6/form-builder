import * as React from 'react';
import styled from 'styled-components';
import { Field as FieldType } from '../../utils';
import {
  DateWidget,
  EmailWidget,
  NumberWidget,
  RadioWidget,
  TextWidget,
} from '../widgets';

const FieldWrapper = styled.div`
  background-color: #fff;
`;

const Error = styled.div`
  border: 1px dashed red;
`;

function getWidgetByType(type: string) {
  switch (type) {
    case 'text':
      return TextWidget;
    case 'email':
      return EmailWidget;
    case 'number':
      return NumberWidget;
    case 'radio':
      return RadioWidget;
    case 'date':
      return DateWidget;
    default:
      throw new Error('Invalid widget');
  }
}

function Field({ type, ...props }: FieldType) {
  const Widget = getWidgetByType(type);

  return (
    <FieldWrapper>
      <Widget {...props} />
    </FieldWrapper>
  );
}

export default Field;
