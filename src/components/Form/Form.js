import React, { useState } from 'react'
import Header from '../Header'
import { Link ,useNavigate} from 'react-router-dom';

const Form = () => {

  const navigate = useNavigate();
  const [user, setUser] = useState(
    {
        Name: '', Email: '', Gender: '', Category: '', Program: '',
    }
  );
  
  let name, value
  console.log(user)
  const data = (e) =>
  {
    name = e.target.name;
    value = e.target.value;
    setUser({...user, [name]: value})
  }

  const getdata = (e) => 
  {
    const {Name, Email, Gender, Category, Program} = user;
    e.preventDefault();
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          Name, Email, Gender, Category, Program
      })
    }
    const res = fetch('https://lead-management-36cec-default-rtdb.firebaseio.com/UserData.json',options)
    if(res)
    {
      navigate("/Checkout")
      alert("Application Submitted")
    }
    else
    {
      alert("Error occured")
    }
  }

  return (
    <div className='w-full'>
      <Header/>
      <div className=" py-6 flex items-center justify-center bg-jacarta-100">
      <div className="bg-white p-8 rounded shadow-lg md:w-3/4 sm:w-96">
        <h2 className=" text-red text-2xl font-semibold mb-4 text-center">SMVDU Admission Form</h2>

        <form method='POST' action='' id='admissionForm'>
          <div className="mb-4">
            <label className="block text-sm font-medium text-jacarta-600">Full Name</label>
            <input
              type="text"
              name='Name'
              className="mt-1 p-2 w-full border border-jacarta-300 outline-none rounded-md"
              placeholder="John Doe"
              value={user.Name}
              onChange={data}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-jacarta-600">Email</label>
            <input
              type="email"
              name='Email'
              className=" mt-1 p-2 w-full outline-none border border-jacarta-300 rounded-md"
              placeholder="john@example.com"
              value={user.Email}
              onChange={data}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-jacarta-600">Gender</label>
            <select name='Gender' value={user.Gender} onChange={data} className="mt-1 p-2 w-full border rounded-md border-jacarta-300 text-jacarta-600 outline-none" required>
              <option selected>Select Gender</option>
              <option >Male</option>
              <option >Female</option>
              <option >Others</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-jacarta-600">Category</label>
            <select name='Category' value={user.Category} onChange={data} className="mt-1 p-2 w-full border rounded-md border-jacarta-300 text-jacarta-600 outline-none" required>
              <option  selected>Select Category</option>
              <option >General</option>
              <option >EWS</option>
              <option >OBC</option>
              <option >SC</option>
              <option >ST</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-jacarta-600">Select Program</label>
            <select name='Program' value={user.Program} onChange={data} className="mt-1 p-2 w-full border rounded-md border-jacarta-300 text-jacarta-600 outline-none" required>
              <option selected>Select a program</option>
              <option >Computer Science</option>
              <option >Engineering</option>
              <option >Business Administration</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-jacarta-600">Upload Documents</label>
            <input name='document' value={user.document} onChange={data} type="file" className="mt-1 w-full" accept=".pdf,.docx,.jpg,.png"  />
          </div>
          <div className="mt-6">
            <Link to='/Checkout'>
            <button
              type="submit"
              className="w-full bg-accent text-white p-2 rounded hover:bg-accent-dark transition duration-300"
              onClick={getdata}
            >
              Submit Application
            </button>
            </Link>
          </div>
        </form>
      </div>
      
    </div>
    </div>
  )
}

export default Form

