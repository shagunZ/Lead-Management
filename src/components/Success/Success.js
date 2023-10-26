import React from 'react'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase'
import { useNavigate } from 'react-router-dom'

const Success = () => {
const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserEmail(user.email);
      } else setUserEmail("");
    });
  }, []);
  console.log(userEmail);

  // const [user, setUser] = useState(
  //   {
  //     Email: userEmail,Payment:"False",
  //   }
  // );
  const getdata =async (e) => 
  {
    // const {Email,Payment} = user;
    e.preventDefault();

///
const usersRef = 'https://lead-management-36cec-default-rtdb.firebaseio.com/UserData.json';
const response = await fetch(usersRef);
const userData = await response.json();

let userId = null;

// user's unique key
for (const key in userData) {
  if (userData[key].Email === userEmail) {
    userId = key;
    break;
  }
}
console.log("mila",userEmail,userId)
///
if (userId) {
  const updatedUserData = {
    Payment:"True"
}
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedUserData)
    }
    const res = await fetch(`https://lead-management-36cec-default-rtdb.firebaseio.com/UserData/${userId}.json`, options);
    if(res)
    {
      navigate("/dashboard")
      alert("Application Submitted")
    }
    else
    {
      alert("Error occured")
    }
  }
};


  return (
    <div>
<div className=" h-screen loginbanner opacity-90">
      <div className="pt-4 ">
        <img className='mx-auto' src="https://www.careeryojana.in/wp-content/uploads/2021/04/SMVDU-University.png" alt="img" height='155px' width='155px' />
      </div>

      <div className=' mt-16'>
        <div >
         
        <div class="bg-gray-100  container">
      <div class="  md:mx-auto">
        <svg viewBox="0 0 24 24" className="text-green-600 w-16 h-16 mx-auto my-6">
            <path fill="currentColor" style={{color:"green"}}
                d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z">
            </path>
        </svg>
        <div class="text-center">
            <h3 class="md:text-2xl text-base text-white font-semibold text-center">Payment Done!</h3>
            <p class="text-white my-2">Thank you for completing your secure online payment.</p>
            <p class="text-white my-2">Welcome to SMVDU!</p>
            <div class="py-10 text-center">
            <Link to='/dashboard'>
                <button onClick={getdata} class="px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3">
                    GO BACK 
               </button>
               </Link>
            </div>
        </div>
    </div>
  </div>

        </div>
      </div>
    </div>
    </div>
  )
}

export default Success
