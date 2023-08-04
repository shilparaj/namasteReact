import { useEffect, useState, useMemo } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { useContext } from "react";
import { UserContext } from "../utility/userContext";
const Header = () => {

  const userInfo = useContext(UserContext);

 return ( <div className="bg-black text-white z-10 fixed top-0 left-0 w-screen max-h-[80px]">
  <div className=" container flex justify-between items-center ">
    <div>
    <img className="w-14 bg-black" src={logo} alt="site logo" />
    </div>
    <div className="flex justify-between text-inherit">
      <NavLink className="text-inherit pl-3 w-1/2 hover:text-[#49d600] active:text-[#49d600]" to='/about-us' >AboutUs</NavLink>
      <NavLink className="text-inherit pl-3 w-1/2 hover:text-[#49d600]  active:text-[#49d600]" to='/'>Home</NavLink>
      <NavLink className="pl-3 w-1/2 hover:text-[#49d600]  active:text-[#49d600]" to='/Contact-us' >Contact</NavLink>
      <NavLink className="pl-3 w-1/2 hover:text-[#49d600]  active:text-[#49d600]" to='/account' >{userInfo.name}</NavLink>
    </div>
  </div>
 
 {/* <button onClick={()=> { console.warn(abc);setAbc(!abc)}}>show header</button> */}
 </div>
 )
}

export default Header;