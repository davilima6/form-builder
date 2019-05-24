import { useEffect, useState } from 'react';
import { Error, Field } from './types';
import { getSchemaFromApi } from './utils';

// eslint-disable-next-line import/prefer-default-export
function useForm(): Object {
  const [schema: Array<Field>, setSchema: Function] = useState([]);
  const [errors: Array<Error>, setErrors: Function] = useState([]);

  useEffect(() => {
    setErrors([]);

    async function fetchResponse() {
      try {
        const schemaFromApi = await getSchemaFromApi();
        setSchema(schemaFromApi.formSchema);
      } catch (error) {
        setErrors(prevErrors => [...prevErrors, error]);
      }
    }
    fetchResponse();
  }, []);

  return {
    schema,
    errors,
    setErrors,
  };
}

function useScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
}

export { useForm, useScrollToTop };
