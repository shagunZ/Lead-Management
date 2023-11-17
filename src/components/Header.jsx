import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from '../firebase'

const Header = () => {

  //for responsiveness

  const [isMobile, setIsMobile] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsMobileMenuOpen(false); // Close the mobile menu on resize
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
      <nav className={`bg-jacarta-800 p-2 bg-[#00007a;] `}>
        <div className={`container mx-auto flex justify-between items-center ${isMobile ? 'flex-col' : 'flex-row'}`}>
          {!isMobile ? <img className="checkoutImg" src="https://www.careeryojana.in/wp-content/uploads/2021/04/SMVDU-University.png"
            alt="logo" /> : <div></div>}
          <div className="text-white font-bold text-lg flex gap-8">
            {isMobile ? <img className="checkoutImg" src="https://www.careeryojana.in/wp-content/uploads/2021/04/SMVDU-University.png"
              alt="logo" /> : <div></div>}
            <div className='m-auto'>SMVDU Admissions</div>
            <div className="cursor-pointer m-auto" onClick={toggleMobileMenu}>
              {isMobile ? <div className='text-white text-xl'>☰</div> : <div ></div>}
            </div>
          </div>

          {(!isMobile || (isMobile && isMobileMenuOpen)) && (
            <div className={`space-x-4 grid  ${isMobile ? ' grid-flow-row items-center w-full gap-1' : 'grid-flow-col items-center'}`}>
              <Link to='/login'><div className={`${isMobile ? '  text-center p-2 px-4 bg-jacarta-700 rounded-lg' : ''}`}><button className={`text-white hover:text-jacarta-300 transition duration-300 `}>Student Login</button></div></Link>
              <Link to='/signup'><div className={`${isMobile ? ' p-2 bg-jacarta-700 rounded-lg text-center' : ''}`}><button className={`text-white hover:text-jacarta-300 transition duration-300`}>Signup</button></div></Link>
              <Link to='/AdminLogin'><div className={`${isMobile ? ' p-2 bg-jacarta-700 rounded-lg text-center' : ''}`}><button className="text-white hover:text-jacarta-300 transition duration-300">Admin Login</button></div></Link>

              <button className=" bg-accent hover:bg-accent-dark text-white font-bold py-2 px-4 rounded transition duration-300" onClick={handleLogout}>
                Logout
              </button>

              <div className={`${isMobile ? 'bg-accent hover:bg-accent-dark rounded-sm text-center' : ''}`}>
                <a href="mailto:admissions@smvdu.ac.in?subject=Your%20Subject&body=Your%20Message">
                  <button className=" text-white py-2 px-2 rounded transition duration-300">
                    Admission Helpline
                  </button>
                </a>
              </div>
            </div>
          )}

        </div>
      </nav>
    </div>
  )
}

export default Header
