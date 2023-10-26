import React, { useEffect, useState } from 'react'
import Header from '../Header'
import { Link } from 'react-router-dom';


const Admindashboard = () => {

  // console.log("found?",userPayment)

  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const url = 'https://lead-management-36cec-default-rtdb.firebaseio.com/UserData.json';

      const response = await fetch(url);
      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData)
        const dataArray = Object.values(responseData || {});
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

        <div className='grid grid-cols-2  mt-8'>
          <div className='m-auto text-accent-dark font-semibold'>Add Counsellor / Check Status of Counsellor</div>
          <div>
            <Link to='/Counsellor'>
              <button className='px-8 py-3 bg-accent-dark rounded-lg font-semibold text-white'>ADD</button>
            </Link>
          </div>
        </div>

        <div className='text-red font-semibold mt-4'>Students Registered</div>
        <div className='p-4  '>
          <div className='text-red grid grid-cols-3 text-sm font-semibold px-5'>
            <div>STUDENT NAME</div>
            <div>STUDENT EMAIL</div>
            <div></div>
          </div>
          {data.map((plan) => (
            <div key={plan.Email} className=' container grid grid-cols-3 gap-2 p-4 rounded-lg shadow-md'>
              <div className=''>{plan.Name}</div>
              <div className=''>{plan.Email}</div>
              <div className=''>Assign Counsellor</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Admindashboard
