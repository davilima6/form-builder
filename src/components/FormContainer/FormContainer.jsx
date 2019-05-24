// @flow
import React, { useCallback, lazy, Suspense } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { useForm } from '../../utils';
import { Spinner } from '..';

const Form = lazy(() => import('../Form/Form'));

const StyledFormContainer = styled.section`
  display: flex;
  justify-content: center;
`;

type Props = {
  history: Array<mixed>,
};

// function validate(data): boolean {
//   return true || data;
// }

function redirectTo(history, toRoute): void {
  history.push(toRoute);
}

const FormContainer = ({ history }: Props) => {
  const { schema, errors, setErrors } = useForm();

  const onSubmit = useCallback((event: SyntheticEvent<>) => {
    event.preventDefault();
    // validate(data);
    redirectTo(history, 'success');
  }, []);

  const onCancel = useCallback(() => {
    // setData({});
    setErrors([]);
  }, [setErrors]);

  return (
    <StyledFormContainer>
      <Suspense fallback={<Spinner size={100} />}>
        <Form schema={schema} errors={errors} onSubmit={onSubmit} onCancel={onCancel} />
      </Suspense>
    </StyledFormContainer>
  );
};

export default withRouter(FormContainer);
