import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <nav className="bg-jacarta-800 p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-white font-bold text-lg">SMVDU Admissions</div>
                    <div className="space-x-4">
                        <Link to='/login'><button className="text-white hover:text-jacarta-300 transition duration-300">Login</button></Link>
                        <Link to='/signup'><button className="text-white hover:text-jacarta-300 transition duration-300">Signup</button></Link>
                        <button className=" bg-accent hover:bg-accent-dark text-white font-bold py-2 px-4 rounded transition duration-300">
                            User
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header
