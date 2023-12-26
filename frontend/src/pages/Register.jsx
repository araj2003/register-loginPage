import React, { useState } from 'react';
import axios from 'axios';
<<<<<<< HEAD
import { toast } from 'react-hot-toast';
import {useNavigate} from 'react-router-dom'
const Register = () => {
  // Move the useState inside the component body
  const navigate = useNavigate()
=======
const Register = () => {
  // Move the useState inside the component body
>>>>>>> 37076fba4d2c4d10a57b882420f49b6ef6713f1d
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });

<<<<<<< HEAD
  const registerUser = async (e) => {
=======
  const registerUser = (e) => {
>>>>>>> 37076fba4d2c4d10a57b882420f49b6ef6713f1d
    e.preventDefault();
    // Add logic to handle the form submission
    console.log(data)
    const {name,email,password} = data;
    try {
<<<<<<< HEAD
      const {data} = await axios.post('/register',{
        name,email,password
      })
      if(data.error){
        toast.error(data.error,{
          duration: 6000,
        })
      }
      else{
        setData({})
        toast.success('Login Succesful. Welcome!')
        navigate('/')
      }
    } catch (error) {
      console.log(error)
=======
      const {data} = axios.post('/register',{
        name,email,password
      })
    } catch (error) {
      
>>>>>>> 37076fba4d2c4d10a57b882420f49b6ef6713f1d
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
