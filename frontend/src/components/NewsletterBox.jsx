// import React from 'react'

// const NewsletterBox = () => {

//     const onSubmitHandler = (event) => {
//         event.preventDefault();
//     }

//   return (
//   <>
//   <div className=' text-center'>
//       <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
//       <p className='text-gray-400 mt-3'>
//       Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
//       </p>
//       <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
//         <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter your email' required/>
//         <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
//       </form>
//     </div>
//   </>
    
//   )
// }

// export default NewsletterBox

import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NewsletterBox = () => {
    const [email, setEmail] = useState(''); // State to manage email input

    const onSubmitHandler = (event) => {
        event.preventDefault();
        
        // Show toast notification
        toast.success('Coupon redeemed!', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });

        // Clear the input field after submission
        setEmail('');
    }

    return (
    <>
      <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
        <p className='text-gray-400 mt-3'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
          <input
            className='w-full sm:flex-1 outline-none'
            type="email"
            placeholder='Enter your email'
            value={email} // Bind input value to state
            onChange={(e) => setEmail(e.target.value)} // Update state when input changes
            required
          />
          <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
        </form>
      </div>
      
      {/* Toast notification container */}
      <ToastContainer />
    </>
    );
}

export default NewsletterBox;

