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
        console.log("res", responseData)
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
        const counsellorInfo = counsdata.find(item => item.Email === selectedCounsellor);
        const counsellorName = counsellorInfo ? counsellorInfo.Name : '';
        console.log("naam", counsellorName)
        const response = await fetch(
          `https://lead-management-36cec-default-rtdb.firebaseio.com/UserData/${userId}.json`,
          {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              counsellor: selectedCounsellor,
              Cname: counsellorName,
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
    console.log("c", selectedCounsellor);
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
    <div className='admindashboardbanner md:h-full sm:h-screen'>
      <Header />
      <div className='container '>

        <div className='grid grid-cols-2 bg-jacarta-800 rounded-lg text-stone-50 mt-8'>
          <div className=' my-auto font-semibold py-6 px-8'>Add Counsellor / Check Status of Counsellor</div>
          <div className=' my-auto text-center'>
            <Link to='/Counsellor'>
              <button className='px-8 py-2 bg-accent-dark rounded-lg font-semibold text-white'>ADD</button>
            </Link>
          </div>
        </div>

        <div className='text-stone-50 font-semibold mt-4 text-center'>STUDENTS REGISTERED</div>
        <div className='py-4 pb-12  md:inline-block sm:flex '>
          <div className=' text-stone-50 grid md:grid-cols-5 text-sm font-semibold px-4 gap-2 py-5 rounded-t-lg bg-jacarta-800'>
            <div className='md:w-full sm:w-[157px]'>STUDENT NAME</div>
            <div>STUDENT EMAIL</div>
            <div>FEE STATUS</div>
            <div>COUNSELLOR</div>
            <div>ASSIGN COUNSELLOR</div>
          </div>
          <div className='md:inline-block sm:flex overflow-x-auto'>
            {data.map((plan, index) => (
              <div key={plan.Email} className={index % 2 === 0 ? ' container grid md:grid-cols-5 gap-2 px-4 py-3 bg-jacarta-100' : 'container sm:w-[1250px] grid md:grid-cols-5 gap-2 px-4 py-3 bg-jacarta-50'}>
                <div className='my-auto '>{plan.Name}</div>
                <div className='my-auto '>{plan.Email}</div>
                <div className=' my-auto '>
                  {plan.Payment}
                </div>
                <div className=' my-auto '>
                  {plan.Cname}
                </div>
                <div className='my-auto md:w-full sm:w-[170px]'>
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
