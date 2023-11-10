import React from 'react';
import logo from '../assets/Logo.svg';
import { Link } from "react-router-dom";
import toast from 'react-hot-toast';

const Navbar = (props) => {

  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className='mx-auto w-11/12 max-w-[1160px]
    flex justify-evenly items-center py-4'> 
      <Link to='/'>
        <img src={logo} alt='StudyNotion Logo' width={160} height={32} loading='lazy'></img>
      </Link>

      <nav>
        <ul className='flex gap-x-6 text-richblack-100'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/'>About</Link>
          </li>
          <li>
            <Link to='/'>Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Login - Signup - Logout - Dashboard */}
      <div className='flex items-center gap-x-4'>

        { !isLoggedIn &&
          <Link to='/login'>
            <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px]
            border border-richblack-700 rounded-[8px]'>
              Login
            </button>
          </Link>
        }

        { !isLoggedIn &&
          <Link to='/signup'>
            <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px]
            border border-richblack-700 rounded-[8px]'>
              Sign Up
            </button>
          </Link>
        }

        { isLoggedIn &&
          <Link to='/'>
            <button onClick={()=> {
              setIsLoggedIn(false);
              toast.success("Logged Out");
            }}
            className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px]
            border border-richblack-700 rounded-[8px]'>
              Log Out
            </button>
          </Link>
        }

        { isLoggedIn &&
          <Link to='/dashboard'>
            <button  className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px]
            border border-richblack-700 rounded-[8px]'>
              Dashboard
            </button>
          </Link>
        }
      </div>

    </div>
  )
}

export default Navbar
