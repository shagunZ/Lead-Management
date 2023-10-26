import React, { useState } from 'react'
import Header from '../Header';

const Counsellor = () => {
    const [user, setUser] = useState(
        {
            Name: '', Email: '', Mobile : '',
        }
    );
    
    const getdata = (e) => 
  {
    const {Name, Email, Mobile} = user;
    e.preventDefault();
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          Name, Email, Mobile
      })
    }
    const res = fetch('https://lead-counsellor-default-rtdb.firebaseio.com/UserData.json',options)
    if(res)
    {
      alert("Application Submitted")
    }
    else
    {
      alert("Error occured")
    }
  }


    return (
        <div>
            <Header />
            <div className='container'>
                <div className=" py-6 flex items-center justify-center mt-6">
                    <div className="bg-white p-8 rounded shadow-lg md:w-1/2 sm:w-full">
                        <h2 className=" text-red text-2xl font-semibold mb-4 text-center">ADD NEW COUNSELLOR</h2>

                        <form method='POST' action=''>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-jacarta-600">FULL NAME</label>
                                <input
                                    type="text"
                                    name='Name'
                                    className="mt-1 p-2 w-full border border-jacarta-300 outline-none rounded-md"
                                    placeholder="John Doe"
                                    value={user.Name}
                                    onChange={(event) => setUser((prev)=>({...prev,Name: event.target.value}))}
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm font-medium text-jacarta-600">EMAIL</label>
                                <input
                                    type="email"
                                    name='Email'
                                    className=" mt-1 p-2 w-full outline-none border border-jacarta-300 rounded-md"
                                    placeholder="john@example.com"
                                    value={user.Email}
                                    onChange={(event) => setUser((prev)=>({...prev,Email: event.target.value}))}
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm font-medium text-jacarta-600">EMAIL</label>
                                <input
                                    type="number"
                                    name='Phone'
                                    className=" mt-1 p-2 w-full outline-none border border-jacarta-300 rounded-md"
                                    placeholder="0000000000"
                                    value={user.Mobile}
                                    onChange={(event) => setUser((prev)=>({...prev,Mobile: event.target.value}))}
                                    required
                                />
                            </div>

                            <div className="mt-6">

                                <button
                                    type="submit"
                                    className="w-full bg-accent text-white p-2 rounded hover:bg-accent-dark transition duration-300"
                                onClick={getdata}
                                >
                                    Add Counsellor
                                </button>

                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Counsellor
