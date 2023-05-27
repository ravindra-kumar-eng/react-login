import React, { useState } from 'react'
import { addUser } from './LocalStorageUtils';
import {useNavigate} from 'react-router-dom';

const Signup = () => {
    const [username,setUsername]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [cpassword,setCpassword]=useState("");
    const [error,setError]=useState("");
    const [success,setSuccess]=useState("");
    const navigate=useNavigate();

    const handleSignup=(e)=>{
        e.preventDefault();
         if(password !== cpassword){
            setError("Error:Password do not match")
        }
        else if(username && email&& password && cpassword){
            setSuccess(" Successfully Signed Up!");
            addUser({username,email,password});
            navigate('/profile')
        }
        else{  
            setError("Error: All the field are mandotary")
        }
    }
  return (
    <div className='signup'>
      <h1 className='left'>Signup</h1>
      <form onSubmit={handleSignup} className='left'>
        <div>
            <label htmlFor="N">Full Name:</label><br />
            <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="N">Email:</label><br />
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="N">Password:</label><br />
            <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="N">Confirm Password:</label><br />
            <input type="text" value={cpassword} onChange={(e)=>setCpassword(e.target.value)}/>
        </div>
        {error && <p className='red'>{error}</p>}
        {success && <p className='green'>{success}</p>}
        <button type='submit'>SignUp</button>
        
      </form>
    </div>
  )
}

export default Signup
