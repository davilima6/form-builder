// @flow
import * as React from 'react';
import styled, { css } from 'styled-components';
import { Error as TypeError, hasErrors, normalize } from '../../utils';
import { Button, Field } from '..';

const { useCallback } = React;

const StyledForm = styled.form`
  background-color: #fff;
  border: 1px solid var(--lite-grey);
  border-radius: 4px;
  box-shadow: 0 2px 2px 0 rgba(47, 55, 64, 0.2), 0 6px 10px 0 rgba(47, 55, 64, 0.2);
  margin: 1em 0 1.5em;
  min-width: 60vw;
  padding: 2em 2em 1em;

  ${props => props.error && 'border: 2px solid var(--dark-red'};
`;

const FormHeader = styled.div`
  margin: 0 0 2em 1em;
`;

const FormTitle = styled.h2``;

const FormDescription = styled.p`
  font-style: italic;
`;

const FormActions = styled.div`
  display: flex;
  margin: 3em 0.5em 0;
  padding: 0.5em;
`;

const StyledError = styled.div`
  background-color: var(--lite-red);
  border-radius: 3px;
  box-sizing: border-box;
  flex: 0 0 100%;
  margin-top: 1em;
  padding: 1em;
`;

type Props = {
  schema: Array<Field>,
  errors?: { [string]: Array<TypeError> },
  errorMessages?: { [string]: Array<string> },
  data?: { [string]: string },
  dispatch: Function,
  onSubmit?: Function,
  onCancel?: Function,
};

const Form = ({
  schema,
  errors = {},
  errorMessages,
  data,
  dispatch,
  onSubmit,
  onCancel,
}: Props) => {
  const onChangeField = useCallback((label, value) => {
    dispatch({ type: 'update', payload: { [normalize(label)]: value } });
  }, []);

  const FormHead = () => (
    <FormHeader>
      <FormTitle>Title of the form</FormTitle>
      <FormDescription>Longer description of the form</FormDescription>
    </FormHeader>
  );

  return (
    <StyledForm method="post" onSubmit={onSubmit} error={errors.length}>
      <FormHead />

      {hasErrors(errors) && <StyledError>{errorMessages.hasErrors()}</StyledError>}

      {schema.map((field) => {
        const key = normalize(`${field.type}_${field.label}`);
        const fieldName = normalize(field.label);

        return (
          <Field
            key={key}
            id={fieldName}
            label={field.label}
            type={field.type}
            value={data[fieldName] ? data[fieldName] : ''}
            errors={errors[fieldName]}
            errorMessages={errorMessages[fieldName]}
            onChangeField={onChangeField}
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
  errors: {},
  errorMessages: {},
  onSubmit: () => {},
  onCancel: () => {},
};

export default Form;
export { StyledError };
