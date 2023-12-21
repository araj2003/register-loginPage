import React, { useState } from 'react';
import axios from 'axios';
const Register = () => {
  // Move the useState inside the component body
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const registerUser = (e) => {
    e.preventDefault();
    // Add logic to handle the form submission
    console.log(data)
    const {name,email,password} = data;
    try {
      const {data} = axios.post('/register',{
        name,email,password
      })
    } catch (error) {
      
    }
  };

  return (
    <>
      <h1>Register</h1>
      <div>
        <form onSubmit={registerUser}>
          <label>Name</label>
          <input type="text" placeholder='Enter Name' value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} />
          <label>Email</label>
          <input type="email" placeholder='Enter email' value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
          <label>Password</label>
          <input type="password" placeholder='Enter password' value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} />
          <button type='submit'>Submit</button>
        </form>
      </div>
    </>
  );
};

export default Register;
