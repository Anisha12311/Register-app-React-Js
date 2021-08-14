import React, {useState} from 'react'
import logo from './image/logo.jpg';
import Validation from './Validation'
import useForm from './useForm'


const Loginpage = ({submitForm}) => {
    const {handleChange,handleSubmit,values,errors }  = useForm(
        submitForm,
        Validation
    )
  
 

    return (
          <div className = "page">
        <div className = "contain">
              <img src = {logo} alt = "" width = "800px" height= "680px" />
            </div>
        <div className = "container">
            
            <div className = "app-wrapper">
            <div>
                    <h1 className = "title">Register</h1>
                </div>
               
                <form onSubmit = {handleSubmit} className = "form-wrapper" noValidate> 

                <div className = "name">
                        <label className = "label">Name</label>
                        <input className = "input" 
                        type = "name" 
                        name = "name" 
                        autoComplete = "off"
                        value = {values.name}
                        onChange = {handleChange}/>
                       {errors.name && <p>{errors.name}</p>}
                    </div>

                    <div className = "phone">
                        <label className = "label">Phone No.</label>
                        <input className = "input" 
                        type = "phone" 
                        name = "phone" 
                        autoComplete = "off"
                        value = {values.phone}
                        onChange = {handleChange}/>
                         {errors.phone && <p>{errors.phone}</p>}
                    </div>
                
                    <div className = "email">
                        <label className = "label">Email</label>
                        <input className = "input" 
                        type = "email" 
                        name = "email" 
                        autoComplete = "off"
                        value = {values.email}
                        onChange = {handleChange}/>
                         {errors.email && <p>{errors.email}</p>}
                    </div>
                 
                    <div className = "password">
                        <label className = "label">Password</label>
                        <input className = "input" 
                        type = "password" 
                        name = "password" 
                        autoComplete = "off"
                        value= {values.password}
                        onChange = {handleChange}/>
                         {errors.password && <p>{errors.password}</p>}
                    </div>
                   
                    <span className='form-input-login'>
                            Already have an account? Login <a href='#'>here</a>
                    </span>
                    <div>
                        <button className = "submit" >Register </button>
                    </div>
                  
                </form>
            </div>
        </div>
        </div>
    )
}

export default Loginpage
