import React from "react";
import waste from '../assets/waste.png'

const Header = () => {
  return (
    <div className="w-full bg-white py-24 px-4 sm:px-44">
      <div className="md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px]  px-4 md:px-0">
        <div className="flex flex-col justify-start gap-4">
          <p className="py-2 text-2xl text-[#20B486] font-medium">
            START TO SUCCESS
          </p>
          <h1 className="md:leading-[72px] py-2 md:text-6xl text-5xl font-semibold">
            USED PLASTIC IS {" "}
            <span className="text-[#20B486]">NOT WASTE</span>
            <br/>
             IT HAS VALUE. IT IS <span className="text-[#20B486]"> RECYCLABLE</span>
          </h1>
          <p className="py-2 text-lg text-gray-600">
            Various versions have evolved over the years, sometimes by accident.
          </p>

        
        </div>

        <img className="pl-10" src={waste} alt="" />
      </div>
    </div>
  );
};

export default Header;
{/* <img src="https://plasticenergy.com/wp-content/uploads/2020/09/Slide-5_Circular-economy-2.gif" alt="" /> */}