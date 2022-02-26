import '../Styles/css/signup.css'
import {Link, useHistory, Redirect } from 'react-router-dom';
import React, { useState, useEffect }  from "react";
import {useForm}from "react-hook-form"
import { checkSession } from '../api';




export default function Signup(){
const history = useHistory();

  const initialValues = { email:"", password:"", passwordConfirm:"" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState([]);


  function handleChange(e){
      const { name, value} = e.target;
      setFormValues({...formValues, [name]: value})
      
    }

 const  handleSubmit = (e) => {
     e.preventDefault()
    const errorList = validate(formValues)
     if( errorList.length < 1){
        submit(formValues)
     } 
    
     
 }

 

 const submit = (formValues) => {    
    
      console.log(formValues);

                fetch('http://localhost:4000/api/auth/signup', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formValues),
            })
            .then(response => response.json())
            .then(data => {
            console.log('Success:', data);
           if(data.status ==='successfully'){
                history.push("/home")
           }
           else {
               setFormErrors([{a:data.message}])
              console.log(data.message);
           }
           
          
        })
            .catch((error) => {
            console.error('Error:', error);
            });
        

  
  };

 






 const validate = (values)=>{
     console.log({values});
    const errors = []
     const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if(!regex.test(values.email)){
         errors.push({email: "provide a valid email"})
     }
     if(values.password !== values.passwordConfirm){
                errors.push({passwordConfirm:"your passwords dont match"})
            }
            setFormErrors(errors);
            return(errors);
            
 }

 if(!checkSession()){


    return (


    <div className='signup--container'>

    <form className='form--sign up form' onSubmit={handleSubmit} >
        {
            formErrors.length ? formErrors.map((error, index) =>(<p key={index} className='errormessage'>{Object.values(error)[0]}</p>)): null

      
        }
    
    <div className='field'>
            <input
                        type="text"
                        placeholder="Email"
                        name="email"
                        className='login--input'
                        value={formValues.email}
                        onChange={handleChange}
                        required = {true}
             />
                        
         
           
    </div>
            


    <div className='field'>
            <input
                    type="password"
                    placeholder="password"
                    className='login--input'
                    name="password"
                    value={formValues.password}
                    onChange={handleChange} 
                   required = {true}             
                    
            />
            { /*<p className='errormessage'>{formErrors.password}</p> */} 
     </div>
            


     <div className='field'>
            <input
                            type="password"
                            placeholder="confirm password"
                            className='login--input'
                            name="passwordConfirm"
                            value={formValues.passwordConfirm}
                            onChange={handleChange}
                            required = {true}
                            
            
             />
                
     </div>

     


     <button className='signup--button button'>Signup</button>  
</form>   

<div className="alternative--signin">

    <p className='alternative--para'> Already have an account? </p>
    
        <Link to="/login"><button className='alternative--button button'>Log In</button></Link>
    
    

</div>


 




</div>



    )} else{
        return <Redirect from="/signup" to="/home" />
    }

}