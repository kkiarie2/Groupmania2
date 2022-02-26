import React from "react"
import  '../Styles/css/Login.css';
import { useForm} from "react-hook-form"
import { Link, Redirect, useHistory } from "react-router-dom";
import {checkSession} from '../api'


export default function Login(){
   const history = useHistory()
    
    const [loginData, setLoginData] = React.useState({ email: "", password: "" })
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
   
    

 
    
    function handleSubmit(event){
        event.preventDefault()

        console.log({email, password})
        fetch('http://localhost:4000/api/auth/login', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email, password}),
            })
            .then(response => response.json())
            .then(data => {
            console.log('Success:', data);
           if(data.status ==='successfully'){
               document.cookie = `token=${data.token}; expires=${data.expiresIn}; path=/`
                               history.push("/home")
           }
           else {
              // setFormErrors([{a:data.message}])
              console.log(data.message);
              alert (data.message)
           }
           
          
        })
            .catch((error) => {
            console.error('Error:', error);
            });
        

    }



    if(!checkSession()){

   
   
    return(

       <div className="login--container">
        <form onSubmit={handleSubmit}>
    
        <input
            type="email"
            placeholder="Email"
            className='login--input'
            name="email"
           // value={loginData.email}
            onChange={(event)=>setEmail(event.target.value)}

        />
    
            <input
            type="password"
            placeholder="password"
            className='login--input'
            name="password"
          //  value={loginData.password}
            onChange={(event)=>setPassword(event.target.value)}
            

            />


            <button className="login--button"> Log in </button>  
    
        
    </form> 

    <div className='alternative--signin'>

        <p className='alternative--para'>Don't have an account?</p>
        
            <Link to="/signup"><button className='alternative--button button'>Signup </button></Link>
        
        

</div>

    
    


    </div> 
    )} else{
        return <Redirect from="/login" to="/home" />
    }
}