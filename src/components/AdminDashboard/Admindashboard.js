import React, { useEffect, useState } from 'react'
import Header from '../Header'
import { Link } from 'react-router-dom';
import './modal.css';

const Admindashboard = () => {

  // console.log("found?",userPayment)
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [selectedCounsellor, setSelectedCounsellor] = useState(null);
  const [data, setData] = useState([]);
  const [counsdata, setCounsdata] = useState([]);
  const [modal, setModal] = useState(false);

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


  const assignCounsellor = async (counsellor) => {
    if (selectedStudent && selectedCounsellor) {

      const usersRef = 'https://lead-management-36cec-default-rtdb.firebaseio.com/UserData.json';
      const response = await fetch(usersRef);
      const userData = await response.json();

      let userId = null;

      // user's unique key
      for (const key in userData) {
        if (userData[key].Email === selectedStudent.Email) {
          userId = key;
          console.log("fff", userData[key].Email)
          break;
        }
      }
      console.log("mila", selectedStudent.Email, userId)

      try {
        const response = await fetch(
          `https://lead-management-36cec-default-rtdb.firebaseio.com/UserData/${userId}.json`,
          {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              counsellor: selectedCounsellor
            }),
          }
        );

        if (response.ok) {
          console.log("sethogaya")
          toggleModal();
        } else {
          console.error('Failed to update student');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
    setSelectedCounsellor(counsellor)
    console.log(selectedCounsellor);
    console.log("fkdj");
    console.log(selectedStudent)
    console.log(selectedCounsellor);
    setSelectedCounsellor(null)
  };

  useEffect(() => {
    fetchData();
    counsellorData();
    // console.log(data);
  }, []);

  // For modals
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
                <button onClick={() => {
                  setSelectedStudent(plan);
                  toggleModal();
                }} className='bg-accent-dark text-white px-3 py-1 rounded-lg'>
                  Assign Counsellor
                </button>
              </div>
            </div>
          ))}
        </div>

        {modal && (
          <div className='modal'>
            <div onClick={toggleModal} className='overlay'></div>
            <div className="modal-content">
              <h2 className='text-accent-dark font-semibold text-sm '>Assign Counsellor</h2>
              <div className=' mt-3 p-2'>
                <p className=' '> Selected Student: <p className='text-accent-dark inline-block'>{selectedStudent.Name}</p></p>
                <div className=' mt-5'>
                  <select
                    value={selectedCounsellor}
                    onChange={(e) => setSelectedCounsellor(e.target.value)}
                  >
                    <option value="">Select a Counsellor</option>
                    {counsdata.map((item) => (
                      <option key={item.id} value={item.Email}>
                        {item.Name}
                      </option>
                    ))}
                  </select>
                  <button
                    onClick={assignCounsellor}
                    className='text-white bg-accent hover-bg-accent-dark px-4 py-1 rounded-lg ml-24'
                  >
                    Assign
                  </button>
                </div>
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
