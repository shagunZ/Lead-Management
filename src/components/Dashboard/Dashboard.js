import React from 'react'
import Header from '../Header'
import { Link } from 'react-router-dom'

const Dashboard = (props) => {
  return (
    <div className="w-full border">
    <Header/>
    <div className="font-bold text-xl text-accent-dark p-5">{props.name ? `Welcome - ${props.name}` : "Login please"}</div>

    <div className="p-6">
      <Link to='/Form'>
        <button className="bg-accent hover:bg-accent-dark text-white font-bold py-2 px-4 rounded transition duration-300">
            Fill Online Form
        </button>
        </Link>
    </div>
  </div>
  )
}

export default Dashboard
