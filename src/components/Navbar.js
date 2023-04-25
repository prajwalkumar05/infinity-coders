import React, { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import lock from "../assets/lock.svg";
import hamburgerMenu from "../assets/hamburgerMenu.svg";
import close from "../assets/close.svg";
import { Link } from "react-router-dom";
import { collection, doc, onSnapshot, updateDoc } from "firebase/firestore";
import LoginModel from "./LoginModel";
import { db } from "../Firebase/config";
import Signin from "./Signin";

const Navbar =  ()  => {

  
  const colRef = doc(db,'points' ,"mgkgNShWPN746F3OGZye")
  const colRefSign = doc(db,'signup' ,"wOBa92TwdE41p11jEKuZ")
  const colRefLogin = doc(db,'signup' ,"mgkgNShWPN746F3OGZye")


  const col= collection(db,'points')

  const signUpValue= collection(db,'signup')

  const [toggle, setToggle] = useState(false);
  const handleClick = () => setToggle(!toggle);


  const [signUp,setSignUp]=useState(null)
  const [login,setLogin] = useState(false)
  const [model,setModel] = useState(false)

  const [points,setPoints]=useState(0)

  console.log(signUp)

  useEffect(() =>{

    
    
    onSnapshot(col,(snap) => {
        let data=[]
        snap.docs.forEach((doc) =>{
          data.push({...doc.data(),id:doc.id})
        })
        console.log(data)
        setPoints(data[0].value)
        
      })

      onSnapshot(signUpValue,(snap) => {
        let data=[]
        snap.docs.forEach((doc) =>{
          data.push({...doc.data(),id:doc.id})
        })
        console.log(data)
        setSignUp(data[0].signValue)
        
      })

      
      
  },[])

 
  const handelModel = async () => {
    setModel(!model)
    setLogin(!login)

     updateDoc(colRefSign,{
      signValue:!signUp
    } ).then(response => {
    })
  }

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
          {!signUp ? <Link
            to="/login"
            className="flex justify-between items-center  bg-transparent  px-6 gap-2"
          >
            <img src={lock} />
            Login
          </Link> : <Link
            to="/scanner"
            className="flex justify-between items-center  bg-transparent  px-6 gap-2"
          >
            <img src={lock} />
            scanner
          </Link>}
          {signUp  ? <button className="px-8 py-3 rounded-md bg-[#20B486] text-white font-bold">
          Your Points is :{points}
          </button> : <Link to="/signin" className="px-8 py-3 rounded-md bg-[#20B486] text-white font-bold">
            
            Sign Up For Free
          </Link>}

          
        </div>

        <div className="md:hidden" onClick={handleClick}>
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
            to="/scanner"
            className="flex justify-between items-center  bg-transparent  px-6 gap-2"
          >
            <img src={lock} />
            Scanner
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
