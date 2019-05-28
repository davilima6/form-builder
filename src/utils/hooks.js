import { useEffect, useReducer, useState } from 'react';
import { Error, Field, FieldData } from './types';
import { getSchemaFromApi } from './utils';

const formReducer = (state: FieldData, action: { type: string, payload: FieldData }) => {
  switch (action.type) {
    case 'update':
      return { ...state, ...action.payload };
    case 'reset':
      return {};
    default:
      return state;
  }
};

function useForm(): {
  schema: Array<Field>,
  data: FieldData,
  dispatch: Function,
  errors: { [string]: Array<TypeError> },
  setErrors: Function,
  } {
  const [schema: Array<Field>, setSchema: Function] = useState([]);
  const [data: { [string]: mixed }, dispatch] = useReducer(formReducer, {});
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
