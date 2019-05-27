import { useEffect, useReducer, useState } from 'react';
import { Error, Field } from './types';
import { getSchemaFromApi } from './utils';

function useForm(): Object {
  const [schema: Array<Field>, setSchema: Function] = useState([]);
  const [data: Object<{ [string]: mixed }>, dispatch] = useReducer(
    (state, action) => ({ ...state, ...action }),
    {},
  );
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
    data,
    dispatch,
    errors,
    setErrors,
  };
}

function useScrollToTop(syncWith = null) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [syncWith]);
}

export { useForm, useScrollToTop };
