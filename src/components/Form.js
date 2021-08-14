import React, {useState} from 'react'
import Formpage from './Formpage'

const Form  = () => {

    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
      setIsSubmitted(true);

    }
    return (
        <div>
            <Formpage submitForm={submitForm} />
        </div>
    )
}

export default Form 
