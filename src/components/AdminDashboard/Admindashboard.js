import React, { useEffect, useState } from 'react'
import Header from '../Header'
import { Link } from 'react-router-dom';
import './modal.css';

const Admindashboard = () => {

  // console.log("found?",userPayment)

  const [data, setData] = useState([]);
  const [counsdata, setCounsdata] = useState([]);

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

  const counsellorData = async () => {
    try {
      const url = 'https://lead-counsellor-default-rtdb.firebaseio.com/UserData.json';
      const response = await fetch(url);
      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData)
        const dataArray = Object.values(responseData || {});
        setCounsdata(dataArray);
      } else {
        console.error('Request failed with status', response.status);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    fetchData();
    counsellorData();
    // console.log(data);
  }, []);

  // For modals
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  if (modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }



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
              <div className='my-auto'>{plan.Name}</div>
              <div className='my-auto'>{plan.Email}</div>
              <div className='my-auto'>
                <button onClick={toggleModal} className='bg-accent-dark text-white px-3 py-1 rounded-lg'>
                  Assign Counsellor
                </button>
              </div>
            </div>
          ))}
        </div>

        {modal && (
          <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-content">
              <h2 className='text-accent-dark font-semibold text-sm '>Assign Counsellor</h2>
              <div className=' mt-3 p-2'>
                {counsdata.map((item) => (
                  <div className='grid grid-cols-2  p-2 rounded-lg shadow-md'>
                    <div className='my-auto'>{item.Name}</div>
                    <div className='ml-auto'>
                      <button className='text-white bg-accent hover:bg-accent-dark px-4 py-1 rounded-lg'>
                        Assign
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <button className="close-modal text-accent-dark" onClick={toggleModal}>
                X
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Admindashboard
