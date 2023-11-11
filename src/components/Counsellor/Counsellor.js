import React, { useEffect, useState } from 'react'
import Header from '../Header';
import { Link } from 'react-router-dom';
const Counsellor = () => {
    const [data, setData] = useState([]);

    const [user, setUser] = useState(
        {
            Name: '', Email: '', Mobile: '', Count: 0,
        }
    );

    const getdata = (e) => {
        const { Name, Email, Mobile,Count } = user;
        e.preventDefault();
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Name, Email, Mobile, Count
            })
        }
        const res = fetch('https://lead-counsellor-default-rtdb.firebaseio.com/UserData.json', options)
        if (res) {
            alert("Application Submitted")
        }
        else {
            alert("Error occured")
        }
    }

    const fetchData = async () => {
        try {
            const url = 'https://lead-counsellor-default-rtdb.firebaseio.com/UserData.json';

            const response = await fetch(url);
            if (response.ok) {
                const responseData = await response.json();
                console.log(responseData)
                const dataArray = Object.values(responseData || {});
                dataArray.sort((a, b) => b.Count - a.Count);
                setData(dataArray);
            } else {
                console.error('Request failed with status', response.status);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        fetchData();
        // console.log(data);
    }, []);


    return (
        <div>
            <Header />
            <div className='container '>
            <Link to='/AdminDashboard'>
                <button class="m-3 font-semibold bg-accent text-white p-2 rounded hover:bg-accent-dark transition duration-300">
                    GO BACK 
               </button>
               </Link>
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
                                    onChange={(event) => setUser((prev) => ({ ...prev, Name: event.target.value }))}
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
                                    onChange={(event) => setUser((prev) => ({ ...prev, Email: event.target.value }))}
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
                                    onChange={(event) => setUser((prev) => ({ ...prev, Mobile: event.target.value }))}
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

                <div className='text-red font-semibold'>
                    Counsellors Detail
                </div>

                <div className='p-4 '>
                    <div className='text-red grid grid-cols-3 text-sm font-semibold text-center'>
                        <div>COUNSELLOR NAME</div>
                        <div>COUNSELLOR EMAIL</div>
                        <div>COUNSELLOR PHONE</div>
                    </div>
                    {data.map((plan) => (
                        <div key={plan.Email} className=' container grid grid-cols-3 gap-2 p-4 rounded-md shadow-md text-center'>
                            <div className=' '>{plan.Name}</div>
                            <div className=' '>{plan.Email}</div>
                            <div className=' '>{plan.Mobile}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Counsellor
