import React from 'react'
import logo from '../assets/images/logo.png'
import pictLogo from '../assets/images/pict_logo.png'
// import './payment.css'

const Payment = () => {
  return (
      <div className='mx-20 text-center'>
          <div className='payment-container grid grid-cols-3 justify-items-center'>
              <img src={logo} alt='img' className = 'h-20 w-20'/>
              <h1 className="mb-2 text-center capitalize text-4xl font-bold text-white">
                  INC'23
                <span className='text-sm font-bold text-white'><p>March 23rd - 24th</p></span>
              </h1>
              <img src={pictLogo} alt='img' className='h-20 w-20' />
          </div>
          <hr className="w-1/5 mx-auto"/>
          <h2 className='m-6 mb-2 text-center capitalize text-2xl font-bold text-white'>Payment Succesfull!!</h2>
          <hr className="w-1/5 mx-auto"/>
          <div className='payment-container grid grid-cols-4 justify-items-center mt-4'>
              {/* <img src='https://drive.google.com/uc?export=view&id=1NgvXwsbT6SMkiyqr-GowrDwWpUCuWz-J' alt='img' className='' /> */}
              <h3 className='mb-2 text-center capitalize text-2xl text-white'>Concepts</h3>
              <p className='text-white text-lg'>Payment id:cbjkbdkbhkc</p>
              <p className='text-white text-lg'>Recipt id:6666666</p>
              <p className='text-white text-2xl text-bold'>Transaction ID:98626171338</p>
          </div>
          <hr className="w-1/5 mx-auto" />
          <h2 className='mt-3 mb-2 text-center capitalize text-xl font-semibold text-white'>TEAM ID:XXXXX</h2>
          <h2 className='mb-2 text-center capitalize text-md font-semibold text-white'>Slot:juniors</h2>

          <div className='table-container items-center text-white'>
              <table className="table-fixed w-full border-collapse border border-black">
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Abhishek Jadhav</td>
                    <td>Abhi@gmail.com</td>
                    <td>9789467892</td>
                    </tr>
                    <tr>
                    <td>Abhishek Jadhav</td>
                    <td>Abhi@gmail.com</td>
                    <td>9789467892</td>
                    </tr>
                    <tr>
                    <td>Abhishek Jadhav</td>
                    <td>Abhi@gmail.com</td>
                    <td>9789467892</td>
                    </tr>
                </tbody>
                </table>
          </div>

          <div className='payment-container grid grid-cols-4 justify-items-center mt-4 col-span-full'>
              <div className=''>
                  <p className=' text-white'><span className='text-lg'>Location:</span><span><br /></span>Pune</p>
                  <p className='mt-5 text-white'>Mode:<span><br/></span>Offline</p>
              </div>
              <div className=''>
                  <p className=' text-white'>Domain:<span><br /></span>Application Development</p>
                  <p className='mt-5 text-white'>College Name:<span><br/></span>PICT</p>
              </div>
              <div className=''>
                  <p className=' text-white'>Type of Project:<span><br /></span>Hardware Based</p>
                  <p className='mt-5 text-white'>Guide Name:<span><br/></span>XYZ/xyz@gmail.com</p>
              </div>
              <div className=''>
                  <p className=' text-white'>Sponsorhip:<span><br /></span>Done</p>
                  <p className='mt-5 text-white'>Company Name:<span><br/></span>Mastercard</p>
              </div>
          </div>
          <h2 className='mt-10 mb-2 text-center text-md font-semibold text-white'>Thank You For Participating in INC'23, For any technical
           assistance feel free to contact <span className='text-red-500'>Abhishek Jadhav: 7030405299</span> or email at <span className='text-red-500'>queries.pictinc2023@gmail.com</span>
          </h2>
        <button class="mt-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl">
            Print
        </button>
    </div>
  )
}

export default Payment