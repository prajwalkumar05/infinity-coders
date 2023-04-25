import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import lock from "../assets/lock.svg";
import hamburgerMenu from "../assets/hamburgerMenu.svg";
import close from "../assets/close.svg";

const  Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => setToggle(!toggle);

  const [login,setLogin] = useState(false)
  const [signUp,setsignup] = useState(false)
  const [points,setpoints] = useState(false)
  
    return (
      <div className="w-full h-[60px] bg-white border-b">


  
        
  
        <div className="md:max-w-[1480px] max-w-[600px] m-auto w-full h-full flex justify-around items-center md:px-0 px-4">
          <img src={logo} className="h-[25px]" />
  
          <div className="hidden md:flex items-center ">
            <ul className="flex gap-4 ">
            <Link
                to="about"
                className="flex justify-between items-center  bg-transparent  px-2 gap-2"
              >
                Home
              </Link>
              
              <Link
                to="shop"
                className="flex justify-between items-center  bg-transparent  px-2 gap-2"
              >
               Shop
              </Link>
            </ul>
          </div>
  
          <div className="hidden md:flex">
            {login ? <Link
              to="/login"
              className="flex justify-between items-center  bg-transparent  px-6 gap-2"
            >
              <img src={lock} />
              Scanner
            </Link> : <Link
              to="/login"
              className="flex justify-between items-center  bg-transparent  px-6 gap-2"
            >
              
              
              Login
            </Link>}
            {signUp  ? <button className="px-8 py-3 rounded-md bg-[#20B486] text-white font-bold">
            Your Points is :{points}
            </button> : <button 
             className="px-8 py-3 rounded-md bg-[#20B486] text-white font-bold">
              
              Sign Up For Free
            </button>}
  
            
          </div>
  
          <div className="md:hidden"  onClick={handleClick}
          >
            <img src={toggle ? close : hamburgerMenu} />
          </div>
        </div>
  
        <div
          className={
            toggle
              ? "absolute z-10 p-4  bg-white w-full px-8 md:hidden border-b"
              : "hidden"
          }
        >
          <ul>
            <li className="p-4 hover:bg-gray-100">Home</li>
            <li className="p-4 hover:bg-gray-100">About</li>
            <li className="p-4 hover:bg-gray-100">Support</li>
            <li className="p-4 hover:bg-gray-100">Platform</li>
            <li className="p-4 hover:bg-gray-100">Pricing</li>
            <div className="flex flex-col my-4 gap-4">
            <Link
              to="/login"
              className="flex justify-between items-center  bg-transparent  px-6 gap-2"
            >
              <img src={lock} />
              Login
            </Link>
              <button  className="px-8 py-5 rounded-md bg-[#20B486] text-white font-bold">
                Sign Up For Free
              </button>
            </div>
          </ul>
        </div>
      </div>
    );
  };


  export default Navbar;