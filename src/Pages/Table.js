import React,{useState} from "react";

import logo1 from '../assets/logo1.jpeg'
import logo2 from '../assets/logo2.jpeg'
import logo3 from '../assets/logo3.jpeg'
import logo4 from '../assets/logo4.jpeg'
import logo5 from '../assets/logo5.jpeg'

function Table() {


    const [show, setShow] = useState(null)
    return (
        <>
            <div className=" flex flex-col  justify-center sm:px-[30%] my-12">
                <div className="px-4 md:px-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">
                    <div className="sm:flex items-center justify-center">
                        <p className="text-base sm:text-lg  md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">Monthly Contest</p>
                    </div>
                </div>
                <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
                    <table className="w-full whitespace-nowrap">
                        <thead>
                            <tr className="h-16 w-full text-sm leading-none text-gray-800">
                                <th className="font-normal text-left pl-4">Profile</th>
                                <th className="font-normal text-left pl-12">Points</th>    
                            </tr>
                        </thead>
                        <tbody className="w-full">
                            
                            
                            <tr className="h-20 text-sm leading-none text-gray-800 border-b border-t bg-white hover:bg-gray-100 border-gray-100">
                                <td className="pl-4 cursor-pointer">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10">
                                            <img className="w-full h-full object-cover" src={logo1} />
                                        </div>
                                        <div className="pl-4">
                                            <p className="font-medium">Hitesh</p>
                                            <p className="text-xs leading-3 text-gray-600 pt-2">Karnataka</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="pl-12">
                                    <p className="text-sm font-medium leading-none text-gray-800">810</p>
                                    
                                </td>
   
                            </tr>


                            <tr className="h-20 text-sm leading-none text-gray-800 border-b border-t bg-white hover:bg-gray-100 border-gray-100">
                                <td className="pl-4 cursor-pointer">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10">
                                            <img className="w-full h-full" src={logo2} />
                                        </div>
                                        <div className="pl-4">
                                            <p className="font-medium">Prajwal Kumar</p>
                                            <p className="text-xs leading-3 text-gray-600 pt-2">Karnataka</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="pl-12">
                                    <p className="text-sm font-medium leading-none text-gray-800">790</p>
                                    
                                </td>
   
                            </tr>


                            <tr className="h-20 text-sm leading-none text-gray-800 border-b border-t bg-white hover:bg-gray-100 border-gray-100">
                                <td className="pl-4 cursor-pointer">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10">
                                            <img className="w-full h-full" src={logo3} />
                                        </div>
                                        <div className="pl-4">
                                            <p className="font-medium">Ragav</p>
                                            <p className="text-xs leading-3 text-gray-600 pt-2">Tamil Nadu</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="pl-12">
                                    <p className="text-sm font-medium leading-none text-gray-800">760</p>
                                    
                                </td>
   
                            </tr>


                            <tr className="h-20 text-sm leading-none text-gray-800 border-b border-t bg-white hover:bg-gray-100 border-gray-100">
                                <td className="pl-4 cursor-pointer">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10">
                                            <img className="w-full h-full" src={logo4} />
                                        </div>
                                        <div className="pl-4">
                                            <p className="font-medium">Tanmay</p>
                                            <p className="text-xs leading-3 text-gray-600 pt-2">Hydrabad</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="pl-12">
                                    <p className="text-sm font-medium leading-none text-gray-800">720</p>
                                    
                                </td>
   
                            </tr>


                            <tr className="h-20 text-sm leading-none text-gray-800 border-b border-t bg-white hover:bg-gray-100 border-gray-100">
                                <td className="pl-4 cursor-pointer">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10">
                                            <img className="w-full h-full" src={logo5} />
                                        </div>
                                        <div className="pl-4">
                                            <p className="font-medium">Pradumyana</p>
                                            <p className="text-xs leading-3 text-gray-600 pt-2">Kerala</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="pl-12">
                                    <p className="text-sm font-medium leading-none text-gray-800">620</p>
                                    
                                </td>
   
                            </tr>
                            
                            



                            
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Table;