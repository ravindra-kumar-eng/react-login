import React from 'react';
import { deleteUser, getUsers } from './LocalStorageUtils';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
        // const username= "Ravi"
        const navigate=useNavigate();
       const currentUser= getUsers();
       const count=currentUser.length;
       const Cuser=currentUser[count-1];
       const manage =()=>{
        localStorage.removeItem('users');
        navigate("/");

     }

    

    
  return (
    <div className='profile'>
      <h1>Profile</h1>
       
       <h3>Full Name: {Cuser.username} </h3>
       <h3>Email: {Cuser.email} </h3>
       <h3>Password: {Cuser.password}</h3>
       <button type='text' onClick={manage}>Logout</button>
    </div>
  )
}

export default Profile
