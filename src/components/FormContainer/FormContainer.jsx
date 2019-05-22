import React, { useCallback, lazy, Suspense } from 'react';
import styled from 'styled-components';
import { useForm } from '../../utils';
import { Spinner } from '..';

const Form = lazy(() => import('../Form/Form'));

const StyledFormContainer = styled.section`
  background-color: #fff;
`;

function validate() {
  return true;
}

function redirectToSucess() {
  return true;
}

function FormContainer() {
  const {
    schema, data, setData, errors,
  } = useForm();

  const onSubmit = useCallback((event) => {
    event.preventDefault();
    validate(data);
    redirectToSucess();
  }, []);

  const onCancel = useCallback(() => {
    setData({});
  }, []);

  return (
    <StyledFormContainer>
      <Suspense fallback={<Spinner size={100} />}>
        <Form
          schema={schema}
          data={data}
          errors={errors}
          onSetData={setData}
          onSubmit={onSubmit}
          onCancel={onCancel}
        />
      </Suspense>
    </StyledFormContainer>
  );
}

export default FormContainer;
