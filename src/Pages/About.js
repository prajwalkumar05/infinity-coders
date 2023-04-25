import React from "react";

const About = () => {
  return (
    <div id="about" className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="p-8 rounded shadow-xl sm:p-16">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
            <h2 className="px-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Used plastic is not a waste. It’s an<span className="px-2 inline-block text-[#20B486]">
              opportunity
              </span>
              <br className="hidden md:block" />
            </h2>
          </div>
          <div className="lg:w-1/2">
            <p className="mb-4   text-base text-gray-700">
              Plastic is a miraculous material that we invented from petroleum
              derivatives. Recycled plastic can be converted into polyester
              which is used to manufacture Shoes, T-shirts, bags, chairs etc.,
              thereby causing less strain on natural resources. The only problem
              with plastic is its irresponsible human handling in its disposing.
              We recognize how well plastic can work for us & you if utilized
              properly. Keeping this in mind, we launched ‘Bottles for Change’.
            </p>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;