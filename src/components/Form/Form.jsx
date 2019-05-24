// @flow
import * as React from 'react';
import styled, { css } from 'styled-components';
import { Error as TypeError, normalize } from '../../utils';
import { Button, Field } from '..';

const { useCallback, useReducer } = React;

const StyledForm = styled.form`
  background-color: #fff;
  border: 1px solid var(--lite-grey);
  border-radius: 4px;
  box-shadow: 0 2px 2px 0 rgba(47, 55, 64, 0.2), 0 6px 10px 0 rgba(47, 55, 64, 0.2);
  margin: 1em 0 1.5em;
  min-width: 60vw;
  padding: 2em 3em 0;

  ${props => props.error
    && css`
      border-color: var(--dark-red);
    `};
`;

const FormHeader = styled.div`
  margin-bottom: 2em;
`;

const FormTitle = styled.h2``;

const FormDescription = styled.p`
  font-style: italic;
`;

const FormActions = styled.div`
  display: flex;
  margin-top: 3em;
  padding: 0.5em;
`;

const StyledError = styled.div`
  border: 1px dashed red;
`;

type Props = {
  schema: Array<Field>,
  errors?: Array<TypeError>,
  data?: { [string]: string },
  onSubmit?: Function,
  onCancel?: Function,
};

const Form = ({
  schema, errors = [], onSubmit, onCancel,
}: Props) => {
  const [formData: Object<{ [string]: mixed }>, dispatch] = useReducer(
    (state, action) => ({ ...state, ...action }),
    {},
  );

  const onChangeField = useCallback(
    (label, value) => {
      dispatch({ [normalize(label)]: value });
    },
    [dispatch],
  );

  const FormHead = () => (
    <FormHeader>
      <FormTitle>Title of the form</FormTitle>
      <FormDescription>Longer description of the form</FormDescription>
    </FormHeader>
  );

  return (
    <StyledForm method="post" onSubmit={onSubmit} error={errors.length}>
      <FormHead />
      {errors.map((error: TypeError) => (
        <StyledError key={normalize(error.message)}>{error.message}</StyledError>
      ))}
      {schema.map((field) => {
        const key = normalize(`${field.type}_${field.label}`);
        const fieldName = normalize(field.label);

        return (
          <Field
            key={key}
            id={fieldName}
            label={field.label}
            type={field.type}
            value={formData[fieldName] ? formData[fieldName] : ''}
            errors={errors[fieldName]}
            onChangeField={onChangeField}
            required
          />
        );
      })}
      <FormActions>
        {onSubmit && <Button type="submit" title="Send" floated="right" primary />}
        {onCancel && <Button type="reset" title="Clear" floated="left" onClick={onCancel} />}
      </FormActions>
    </StyledForm>
  );
};

Form.defaultProps = {
  data: {},
  errors: [],
  onSubmit: () => {},
  onCancel: () => {},
};

export default Form;
