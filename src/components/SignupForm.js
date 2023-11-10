import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';


const SignupForm = ({setIsLoggedIn}) => {

  const navigate = useNavigate();

  const [accountType, setAccountType] = useState("student");

  const [formData, setFormData] = useState({
    firstname:"", lastname:"", email:"", password:"", confirmPassword:""
  })

  const [showPassword, setShowPassword] = useState(false);
  const [showCnfPassword, setShowCnfPassword] = useState(false);

  function changeHandler(event) {
    setFormData( (prevData)=> (
      {
        ...prevData,
        [event.target.name]: event.target.value
      }
    ))
  }

  function submitHandler(event) {
    event.preventDefault();
    if(formData.password !== formData.confirmPassword) {
      toast.error("Passwords Not Matching");
      return;
    }

    setIsLoggedIn(true);
    toast.success("Logged In");
    
    const accountData = {
      ...formData
    };
    
    const finalData = {
      ...accountData,
      accountType
    }

    console.log("printing final account data")
    console.log(finalData);

    navigate('/dashboard');
  }

  return (
    <div>

      {/* student - instrcutor tab */}
      <div className='flex bg-richblack-800 p-1 gap-x-1 my-6 max-w-max rounded-full '>

        <button className={`${accountType === "student" ?
        ("bg-richblack-900 text-richblack-5"):("bg-transparent text-richblack-200")}
        py-2 px-5 rounded-full transition-all duration-200`}
        onClick={()=> setAccountType("student")}>
          Student
        </button>

        <button className={`${accountType === "intructor" ?
        ("bg-richblack-900 text-richblack-5"):("bg-transparent text-richblack-200")}
        py-2 px-5 rounded-full transition-all duration-200`}
        onClick={()=> setAccountType("intructor")}>
          Instructor
        </button>
      </div>

      <form onSubmit={submitHandler}
      className='flex flex-col w-full gap-y-4'>
        {/* first name & last name container div */}
        <div className='flex gap-x-4'>
          <label className='w-full'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
              First Name <sup className=' text-pink-200'>*</sup>
            </p>
            <input
            required
              type='text'
              name='firstname'
              onChange={changeHandler}
              placeholder='Enter first name'
              value={formData.firstname}
              className=' bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' />
          </label>
          <label  className='w-full'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
              Last Name <sup className=' text-pink-200'>*</sup>
            </p>
            <input
            required
              type='text'
              name='lastname'
              onChange={changeHandler}
              placeholder='Enter last name's
              value={formData.lastname}
              className=' bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' />
          </label>
        </div>

        {/* email address container */}
        <label>
          <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
            Email Address <sup className=' text-pink-200'>*</sup>
          </p>
          <input
            required
            type='email'
            name='email'
            onChange={changeHandler}
            placeholder='Enter email address'
            value={formData.email}
            className=' bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' />
        </label>

        {/* create & confirm password container */}
        <div  className='flex gap-x-4'>
          <label className=' w-full relative'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
              Create Password <sup className=' text-pink-200'>*</sup>
            </p>
            <input
              required
              type={showPassword ? ("text") : ("password")}
              name='password'
              onChange={changeHandler}
              placeholder='Enter Password'
              value={formData.password}
              className=' bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' 
            />

            <span  className='absolute right-3 top-[38px] cursor-pointer'
            onClick={()=> setShowPassword((prev)=> !prev)}>
              {
                showPassword ? 
                  
                (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>):

                (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)
              }
            </span> 
          </label>

          <label className=' w-full relative'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
              Confirm Password <sup className=' text-pink-200'>*</sup>
            </p>
            <input
              required
              type={showCnfPassword ? ("text") : ("password")}
              name='confirmPassword'
              onChange={changeHandler}
              placeholder='Confirm Password'
              value={formData.confirmPassword} 
              className=' bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />

            <span  className=' absolute right-3 top-[38px] cursor-pointer'
            onClick={()=> setShowCnfPassword((prev)=> !prev)}>
              {
                showCnfPassword ? 

                (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>):

                (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)
              }
            </span> 
          </label>
        </div>
        
        <button className=' w-full bg-yellow-50 rounded-[5px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
          Create Account
        </button>

      </form>
    </div>
  )
}

export default SignupForm
