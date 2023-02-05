import React from 'react'
import logo from '../assets/images/logo.png'
import pictLogo from '../assets/images/pict_logo.png'
// import './payment.css'

const Payment = () => {
  return (
      <div className='mx-20 text-center'>
          <div className='payment-container grid grid-cols-3 justify-items-center'>
              <img src={logo} alt='img' className = 'h-20 w-20'/>
              <h1 className="mb-2 text-center capitalize text-4xl font-bold text-black">
                  INC'23
                <span className='text-sm font-bold text-black'><p>March 23rd - 24th</p></span>
              </h1>
              <img src={pictLogo} alt='img' className='h-20 w-20' />
          </div>
          <hr className="w-1/5 mx-auto"/>
          <h2 className='m-6 mb-2 text-center capitalize text-2xl font-bold text-black'>Payment Succesfull!!</h2>
          <hr className="w-1/5 mx-auto"/>
          <div className='payment-container grid grid-cols-2 justify-items-center mt-4'>
              {/* <h3 className='mb-2 text-center capitalize text-2xl text-black mt-28'>Concepts</h3>
              <img src='https://drive.google.com/uc?export=view&id=1NgvXwsbT6SMkiyqr-GowrDwWpUCuWz-J' alt='img' className='h-15' />
              <div className='mt-28'>
                   <p className='text-black text-lg'>Payment id:cbjkbdkbhkc</p>
                   <p className='text-black text-lg'>Recipt id:6666666</p>
                   <p className='text-black text-2xl text-bold'>Transaction ID:98626171338</p>
              </div> */}
              <div className='inline-flex justify-around'>
                  <img src='https://drive.google.com/uc?export=view&id=1NgvXwsbT6SMkiyqr-GowrDwWpUCuWz-J' alt='img' className='h-24 w-24' />
                  <h3 className='mt-8 text-center capitalize text-2xl text-black'>Concepts</h3>
              </div>
              <div className=''>
                   <p className='text-black text-lg'>Payment Id:cbjkbdkbhkc</p>
                   <p className='text-black text-lg'>Transaction Id:6666666</p>
                   <p className='text-black text-2xl text-bold'>Recipt ID:98626171338</p>
              </div> 
          </div>
          <hr className="w-1/5 mx-auto" />
          <h2 className='mt-3 mb-2 text-center capitalize text-xl font-semibold text-black'>TEAM ID:XXXXX</h2>
          <h2 className='mb-2 text-center capitalize text-md font-semibold text-black'>Slot:juniors</h2>

          <div className='table-container items-center text-black'>
              <table className="table-fixed w-full border-collapse border border-black">
                <thead>
                    <tr className='border-collapse border border-black'>
                    <th className='border-collapse border border-black'>Name</th>
                    <th className='border-collapse border border-black'>Email</th>
                    <th className='border-collapse border border-black'>Phone</th>
                    </tr>
                </thead>
                <tbody className='border-collapse border border-black'>
                    <tr className='border-collapse border border-black'>
                    <td className='border-collapse border border-black'>Abhishek Jadhav</td>
                    <td className='border-collapse border border-black'>Abhi@gmail.com</td>
                    <td className='border-collapse border border-black'>9789467892</td>
                    </tr>
                    <tr className='border-collapse border border-black'>
                    <td className='border-collapse border border-black'>Abhishek Jadhav</td>
                    <td className='border-collapse border border-black'>Abhi@gmail.com</td>
                    <td className='border-collapse border border-black'>9789467892</td>
                    </tr>
                    <tr className='border-collapse border border-black'>
                    <td className='border-collapse border border-black'>Abhishek Jadhav</td>
                    <td className='border-collapse border border-black'>Abhi@gmail.com</td>
                    <td className='border-collapse border border-black'>9789467892</td>
                    </tr>
                </tbody>
                </table>
          </div>

          <div className='payment-container grid grid-cols-2 justify-items-center mt-4 col-span-full'>
              <div className=''>   
                  <p className='mt-5 text-black'><span className='text-lg font-bold'>Domain:<br /></span>Application Development</p>
                  <p className='mt-5 text-black'><span className='text-lg font-bold'>College Name:<br/></span>PICT</p>
                  
              </div>
              <div className=''>                   
                  <p className='mt-5 text-black'><span className='text-lg font-bold'>Type of Project:<br /></span>Hardware Based</p> 
                  <p className='mt-5 text-black'><span className='text-lg font-bold'>Guide Name:<br/></span>XYZ/xyz@gmail.com</p>
                                
              </div>
              <div className=''>        
                  <p className='mt-5 text-black'><span className='text-lg font-bold'>Sponsorhip:<br /></span>Done</p>
                  <p className='mt-5 text-black'><span className='text-lg font-bold'>Location:<br /></span>Pune</p>  
              </div>
              <div className=''>
                  <p className='mt-5 text-black'><span className='text-lg font-bold'>Company Name:<br /></span>Mastercard</p>
                  <p className='mt-5 text-black'><span className='text-lg font-bold'>Mode:<br /></span>Offline</p>                              
              </div>
          </div>
          <h2 className='mt-10 mb-2 text-center text-md font-semibold text-black'>Thank You For Participating in INC'23
          </h2>
          <h2 className='mt-10 mb-2 ml-10 text-left text-md text-black'>Regards,<br />Team INC,<br />queries.pictinc2023@gmail.com<br />
          7030405299 
          </h2>
        <button class="mt-10 mb-3 bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-2xl">
            Print
        </button>
    </div>
  )
}

export default Payment