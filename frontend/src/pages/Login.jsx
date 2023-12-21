import React,{useState} from 'react'
import axios from 'axios'
const Login = () => {

  const [data,setData] = useState({
    email:"",
    password:""
  })

  const registerUser = (e) => {
    e.preventDefault()
    console.log(data)
    axios.get('/')
  }

  return (
    <>
      <h1>Login</h1>
      <div>
      <form onSubmit={registerUser}>
          <label>Email</label>
          <input type="email" placeholder='Enter email' value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
          <label>Password</label>
          <input type="password" placeholder='Enter password' value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} />
          <button type='submit'>Submit</button>
        </form>
      </div>
    </>
  )
}

export default Login