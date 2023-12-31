import React from 'react';
import frameImage from '../assets/frame.png';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import { FcGoogle } from "react-icons/fc";

const Template = ({title, desc1, desc2, image, formType, setIsLoggedIn}) => {
  return (
    <div className='mx-auto max-w-[1160px] py-6 flex justify-between w-11/12 gap-x-12 '>

      <div className=' w-11/12 max-w-[450px]'>
        <h1 className='text-richblack-5 font-semibold text-[1.8rem] leading-[2.375rem]'>
          {title}
        </h1>
        <p className='text-[1.1rem] leading-[1.625rem] mt-1'>
            <span className='text-richblack-100'>{desc1}</span>
            <br />
            <span className='text-blue-100 italic'>{desc2}</span>
        </p>

        {formType === 'signup' ?
        (<SignupForm setIsLoggedIn={setIsLoggedIn} />):
        (<LoginForm setIsLoggedIn={setIsLoggedIn} />)}

        <div className='flex w-full items-center my-4 gap-x-2'>
            <div className='w-full h-[1px] bg-richblack-700'></div>
            <p className='text-richblack-700 font-medium leading-[1.375rem]'>
              OR
            </p>
            <div className='w-full h-[1px] bg-richblack-700'></div>
        </div>

        <button className='w-full cursor-pointer px-[12px] py-[8px] gap-x-2
        flex justify-center items-center font-medium text-richblack-100
        border border-richblack-700 rounded-[8px] '>
          <FcGoogle />
          <p>Sign Up with Google</p>
        </button>
      </div>

      <div className='relative w-11/12 max-w-[450px] '>
        <img src={frameImage}
            alt='pattern'
            width={558}
            height={504}
            loading='lazy' />

        <img src={image}
            alt='Students'
            width={558}
            height={490}
            loading='lazy'
            className='absolute -top-4 right-4' />
      </div>



    </div>
  )
}

export default Template
