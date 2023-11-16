import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from '../firebase'

const Header = () => {

  const navigate = useNavigate()
  function handleLogout() {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/signup")
    }).catch((error) => {
      // An error happened.
      console.log(error)
    });
  }

  return (
    <div>
      <nav className="bg-jacarta-800 p-2 bg-[#00007a;]  ">
        <div className="container mx-auto flex justify-between items-center">
        <Link to="/dashboard">
          <img className="checkoutImg" src="https://www.careeryojana.in/wp-content/uploads/2021/04/SMVDU-University.png"
            alt="logo" />
            </Link>
            <Link to="/dashboard">
          <div className="text-white font-bold text-lg">SMVDU Admissions</div>
            </Link>
          <div className="space-x-4">
            <Link to='/login'><button className="text-white hover:text-jacarta-300 transition duration-300">Student Login</button></Link>
            <Link to='/signup'><button className="text-white hover:text-jacarta-300 transition duration-300">Signup</button></Link>
            <Link to='/AdminLogin'><button className="text-white hover:text-jacarta-300 transition duration-300">Admin Login</button></Link>

            <button className=" bg-accent hover:bg-accent-dark text-white font-bold py-2 px-4 rounded transition duration-300" onClick={handleLogout}>
              Logout
            </button>

            <a href="mailto:admissions@smvdu.ac.in?subject=Your%20Subject&body=Your%20Message">
              <button className="bg-accent hover:bg-accent-dark text-white py-2 px-2 rounded transition duration-300">
                Admission Helpline
              </button>
            </a>


          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
