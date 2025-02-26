import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from './Auth';
import'./NavBar.css'
import image from '../component/header.png.jfif'
export default function NavBar() {
  const auth = useAuth();
  return (
    <div className="nav-container" >
    <div className="img">
    <img src={image}  width="70" height="78"/>
    </div>
    <div className='navhead'>
      <h1 className='title'><i>Student Management System</i></h1>
      </div>
      <div className='navbar'>
    <NavLink to='/'>Home</NavLink>
      <NavLink to='/about'>About</NavLink>
      {auth.user &&<NavLink to="/student-details">Student Details</NavLink>}
     {auth.user && <NavLink to="/student-view">Student View</NavLink>}
     {/* {auth.user&&<NavLink to="/studentdetail">StudentDetails</NavLink>} */}
       {auth.user &&  <NavLink to='/staffpages'>StaffPages</NavLink>}   
         {auth.user && <NavLink to='/signup'>Signup</NavLink>}
         {auth.user && <NavLink to='/semdetails'>SemesterDetail</NavLink>}
         <NavLink to='/login'>Login</NavLink>
         <NavLink to='/cgpa'>CGPA</NavLink>
      </div>
    </div>
    
  );
}