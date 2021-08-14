function Validation(values) {
    let errors = {};

    if (!values.name.trim()) {
        errors.name = 'Name required';
      }
       else if (!/^[A-Za-z]+/.test(values.name.trim())) {
         errors.name = 'Enter a valid name';
      }


    if (!values.phone) {
      errors.phone = 'Phone No. is required';
    }
      else if (values.phone.length<10 || values.phone.length>10 ) {
             errors.phone = 'Digit must be 10 number ';
    }
 
    if (!values.email) {
      errors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(values.password)) {
      errors.password = 'Minimum eight characters, at least one uppercase letter, one lowercase letter and one number:';
    }
  
    
    return errors;
  }

export default Validation
