import { useState, useEffect } from 'react';

const useForm = (callback, Validation) => {
  const [values, setValues] = useState({
    name: '',
    phone: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value
    });
    // localStorage.setItem('myValueInLocalStorage', e.target.value);
 
    // setValues(e.target.value);
  };
 

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(Validation(values));
    setIsSubmitting(true);
     
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [errors]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;