import * as React from 'react';
import styled, { css } from 'styled-components';
import { normalize } from '../../utils';
import { Button, Field } from '..';

const { useCallback, useState } = React;

const StyledForm = styled.form`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 2px 0 rgba(47, 55, 64, 0.2), 0 6px 10px 0 rgba(47, 55, 64, 0.2);
  margin: 0.4em 0;
  max-width: 40vw;
  ${props => props.primary
    && css`
      background-color: #000;
      color: #fff;
    `}
`;

const FormActions = styled.div`
  border-top: 1px solid grey;
`;

const Error = styled.div`
  border: 1px dashed red;
`;

type Props = {
  schema: {
    fields: Array<string>,
    properties: mixed,
    required: Array<string>,
  },
  data: Array<Object>,
  errors: Array<Object>,
  onSetData?: Function,
  onSubmit?: Function,
  onCancel?: Function,
};

function Form({
  schema, data, errors, onSubmit, onCancel,
}: Props) {
  const [formData, setFormData] = useState(data);

  const onChangeField = useCallback((event) => {
    const inputValue = event.target.value;

    setFormData(inputValue);
  }, []);

  return (
    <StyledForm method="post" onSubmit={onSubmit}>
      {errors && Object.keys(errors).map(error => <Error key={error.message}>{error}</Error>)}
      {schema
        && schema.map((field) => {
          const fieldName = normalize(field.label);

          return (
            <Field
              key={`${field.type}_${field.label}`}
              id={fieldName}
              value={formData[fieldName]}
              type={fieldName}
              onChange={onChangeField}
              error={errors[fieldName]}
              required
            />
          );
        })}
      <FormActions>
        {onSubmit && <Button type="submit" float="right" title="Send" primary />}
        {onCancel && <Button type="reset" float="left" title="Clear" onClick={onCancel} />}
      </FormActions>
    </StyledForm>
  );
}

Form.defaultProps = {
  onSetData: () => {},
  onSubmit: () => {},
  onCancel: null,
};

export default Form;
