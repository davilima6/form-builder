// @flow
import React, { useCallback, lazy, Suspense } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import CONFIG from '../../config';
import {
  Error,
  Field,
  hasErrors,
  getMinAgeMinDateFrom,
  normalize,
  useScrollToTop,
  useForm,
} from '../../utils';
import {
  errorMessages,
  validateInRange,
  validateMinDate,
  validateMaxLength,
  validatePattern,
  validateRequired,
} from '../../utils/validators';
import { Spinner } from '..';

const Form = lazy(() => import('../Form/Form'));

function validate(schema: { [string]: Field }, data: { [string]: Error }): Array<Error> {
  const errors = schema.reduce((obj, field) => {
    const fieldName = normalize(field.label);
    const currentValue = data[fieldName] || '';

    // Validate all fields as required
    let fieldErrors = [...validateRequired(currentValue)];

    switch (field.type) {
      case 'email':
        fieldErrors = [
          ...fieldErrors,
          ...validateMaxLength(currentValue, CONFIG.rules.email.max),
          ...validatePattern(currentValue, CONFIG.rules.email.pattern, CONFIG.rules.email.domain),
        ];
        break;
      case 'text':
        fieldErrors = [...fieldErrors, ...validateMaxLength(currentValue, CONFIG.rules.text.max)];
        break;
      default:
    }

    switch (fieldName) {
      case 'age':
        fieldErrors = [
          ...fieldErrors,
          ...validateInRange(currentValue, CONFIG.rules.age.min, CONFIG.rules.age.max),
        ];
        break;
      case 'date-of-birth': {
        const currentDate = new Date(currentValue);
        const now = new Date();
        const minDate = getMinAgeMinDateFrom(now);

        fieldErrors = [...fieldErrors, ...validateMinDate(currentDate, minDate)];
        break;
      }
      default:
    }

    // eslint-disable-next-line no-param-reassign
    obj[fieldName] = fieldErrors;

    return obj;
  }, {});

  return errors;
}

function redirectTo(history, toRoute): void {
  history.push(toRoute);
}

const StyledFormContainer = styled.section`
  display: flex;
  justify-content: center;
`;

type Props = {
  history: Array<string>,
};

const FormContainer = ({ history }: Props) => {
  const {
    schema, data, dispatch, errors, setErrors,
  } = useForm();

  useScrollToTop(errors);

  const onSubmit = useCallback(
    (event: SyntheticEvent<>) => {
      event.preventDefault();
      const newErrors = validate(schema, data);
      const hasErrored = hasErrors(newErrors);

      if (!hasErrored) {
        redirectTo(history, 'success');
      }

      setErrors(prevErrors => ({ ...prevErrors, ...newErrors }));
    },
    [data],
  );

  const onCancel = useCallback(() => {
    dispatch({ type: 'reset' });
    setErrors({});
  }, []);

  return (
    <StyledFormContainer>
      <Suspense fallback={<Spinner size={100} />}>
        <Form
          schema={schema}
          data={data}
          dispatch={dispatch}
          errors={errors}
          errorMessages={errorMessages}
          onSubmit={onSubmit}
          onCancel={onCancel}
        />
      </Suspense>
    </StyledFormContainer>
  );
};

export default withRouter(FormContainer);
