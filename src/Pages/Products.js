import React from 'react'
import { Link } from 'react-router-dom';

const Products = () => {


    const products = [
 
        {
          id: 1,
          name: "Shoe",
          href: "#",
          imageSrc:
            "https://static.wixstatic.com/media/8e636c_1fd4c70d85ea482ea27a963153ded4bd~mv2.jpg/v1/fill/w_625,h_625,al_c,q_85,usm_0.66_1.00_0.01/8e636c_1fd4c70d85ea482ea27a963153ded4bd~mv2.webp",
          imageAlt: "Front of men's Basic Tee in black.",
          price: "620",
          color: "Black",
        },
      
        {
          id: 2,
          name: "Bag",
          href: "#",
          imageSrc:"https://rukminim1.flixcart.com/image/612/612/xif0q/backpack/z/b/4/2-saturn-15-n08904-06-backpack-national-geographic-0-1-20-original-imaggd4uf86ydkwb.jpeg?q=70",
          imageAlt: "Front of men's Basic Tee in black.",
          price: "635",
          color: "Black",
        },
      
        {
          id: 3,
          name: "Shirt",
          href: "#",
          imageSrc:
            "https://rukminim1.flixcart.com/image/832/832/kwzap3k0/shirt/u/c/6/xxl-lstr-black-p-v-creations-original-imag9jggw5pxzjfg.jpeg?q=70",
          imageAlt: "Front of men's Basic Tee in black.",
          price: "580",
          color: "Black",
        },
      
        {
          id:43,
          name: "Shirt",
          href: "#",
          imageSrc:
            "https://rukminim1.flixcart.com/image/832/832/jvmpci80/shirt/p/d/d/m-sys-b4003-funday-fashion-original-imafgfwjrtjhg852.jpeg?q=70",
          imageAlt: "Front of men's Basic Tee in black.",
          price: "350",
          color: "Black",
        },
      
        
      ];

  return (
    <div className="bg-white w-full">
      <h2 className="max-w-lg mb-6  font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
        Redeem Your Points Here
      </h2>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((item,i) =>{
            return(
              <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="bg-white h-64 flex items-center justify-center">
                <img className="w-full h-full object-contain" src={item.imageSrc} alt="Product" />
              </div>
              <div className="px-4 py-2 sm:px-6 sm:py-4">
                <h2 className="text-gray-900 font-bold text-2xl mb-2">{item.name}</h2>
                <p className="text-gray-700 text-base mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="rounded-full bg-green-500 text-white font-bold px-3 py-1 text-sm mr-2">rs.{item.price}</div>
                    
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 1l2.928 6.196L19 7.327l-4.214 4.1.993 6.115L10 16.318l-5.778 3.224.993-6.115L1 7.327l5.072-.131L10 1z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600 font-bold">4.5</span>
                    <span className="text-gray-500 ml-1">(28)</span>
                  </div>
                </div>
                <Link to="/shop" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Add to Cart
                </Link>
              </div>
            </div>
            )
          })}
        </div>
        <div className=" lg:px-6 lg:py-0 md:py-16 md:px-24 py-16 px-6 flex flex-col justify-center items-center text-center ">
        <Link to="/shop" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-gray-700 text-white text-base leading-4 bg-gray-800 lg:px-10 py-4 lg:w-auto w-72 mt-16">
          Discover More
        </Link>
      </div>
      </div>
      
    </div>
  )
}

export default Products