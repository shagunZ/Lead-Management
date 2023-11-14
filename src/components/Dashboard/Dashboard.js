import React from 'react'
import Header from '../Header'
import { Link } from 'react-router-dom'
import Sidebar from '../Sidebar'

const Dashboard = (props) => {
  return (
    <div className="w-full ">
      <Header />
      <div className='studentdashboardbanner flex'>
        <div className='w-[284px]'>
          <Sidebar />
        </div>
        <div>
          <div className="font-bold text-xl text-stone-50 p-5">{props.name ? `Welcome - ${props.name}!` : "Login please"}</div>
          <div className="p-6 ">
            <div className='text-red font-semibold pb-3'>Application Form</div>

            <div className=' p-6 rounded-lg bg-jacarta-900'>
              <div className='flex md:gap-64'>
                <div className=' m-auto text-stone-50'>Application for the admission in the course of Bachelor of Technology 2024</div>
                <div>
                  <Link to='/Form'>
                    <button className="bg-accent hover:bg-accent-dark text-white font-bold py-2 px-4 rounded transition duration-300">
                      Fill Online Form
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className='bg-jacarta-900 p-6 rounded-lg my-14'>
              <div className='flex md:gap-64'>
                <div className='text-stone-50 m-auto'>Application for the admission in the course of Bachelor of Architecture 2024</div>
                <div>
                  
                    <button className="bg-red text-white font-bold py-2 px-4 rounded transition duration-300">
                      Application Closed
                    </button>
                 
                </div>
              </div>
            </div>
            <div className=' p-6 rounded-lg bg-jacarta-900'>
              <div className='flex md:gap-64'>
                <div className='text-stone-50 m-auto'>Application for the admission in the course of Master of Business Administration</div>
                <div>
                 
                    <button className="bg-red text-white font-bold py-2 px-4 rounded transition duration-300">
                      Application Closed
                    </button>
                  
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
