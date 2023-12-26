import React from 'react'
import { useContext } from 'react'
import {userContext} from '../context/userContext'
const Dashboard = () => {
    const {user} = useContext(userContext)
    console.log(user)
  return (
    <div>
        <h1>Dashboard</h1>
        {!!user && (<h2>Hi {user.name}!</h2>)}
    </div>
  )
}

export default Dashboard