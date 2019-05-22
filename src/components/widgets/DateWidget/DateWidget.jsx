import * as React from 'react';
import styled from 'styled-components';
import { normalize } from '../../../utils';

const WidgetWrapper = styled.div`
  background-color: #fff;
`;

const Label = styled.label`
  .label {
    font-variant: small-caps;
  }
`;

const Error = styled.div`
  border: 1px dashed red;
`;

type Props = {
  id: string,
  label: string,
  data?: number,
  errors?: Array<Object>,
  onChange: Function,
};

function DateWidget({ id, label, data, errors, onChange }: Props) {
  const fieldId = `field-${id}`;

  return (
    <WidgetWrapper>
      <Label htmlFor={fieldId}>
        <span className="label">{label}</span>
        <input
          type="datetime-local"
          id={fieldId}
          name={id}
          value={data || ''}
          onChange={({ target }) =>
            onChange(id, target.value !== '' ? target.value : undefined)
          }
        />
      </Label>
      {errors.map(message => (
        <Error key={normalize(message)}>{message}</Error>
      ))}
    </WidgetWrapper>
  );
}

DateWidget.defaultProps = {
  data: new Date().getTime(),
  errors: [],
};

export default DateWidget;
