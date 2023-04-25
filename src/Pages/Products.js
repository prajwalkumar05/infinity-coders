import React from 'react'

const Products = () => {


    const products = [
 
        {
          id: 1,
          name: "Basic Tee",
          href: "#",
          imageSrc:
            "https://static.wixstatic.com/media/8e636c_1fd4c70d85ea482ea27a963153ded4bd~mv2.jpg/v1/fill/w_625,h_625,al_c,q_85,usm_0.66_1.00_0.01/8e636c_1fd4c70d85ea482ea27a963153ded4bd~mv2.webp",
          imageAlt: "Front of men's Basic Tee in black.",
          price: "$35",
          color: "Black",
        },
      
        {
          id: 2,
          name: "Basic Tee",
          href: "#",
          imageSrc:
            "data:image/jpeg;base64,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",
          imageAlt: "Front of men's Basic Tee in black.",
          price: "$35",
          color: "Black",
        },
      
        {
          id: 3,
          name: "Basic Tee",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
          imageAlt: "Front of men's Basic Tee in black.",
          price: "$35",
          color: "Black",
        },
      
        {
          id:43,
          name: "Basic Tee",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
          imageAlt: "Front of men's Basic Tee in black.",
          price: "$35",
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
              <div className="bg-gray-300 h-64 flex items-center justify-center">
                <img className="w-full h-full object-cover" src={item.imageSrc} alt="Product" />
              </div>
              <div className="px-4 py-2 sm:px-6 sm:py-4">
                <h2 className="text-gray-900 font-bold text-2xl mb-2">{item.name}</h2>
                <p className="text-gray-700 text-base mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="rounded-full bg-green-500 text-white font-bold px-3 py-1 text-sm mr-2">$99.99</div>
                    
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 1l2.928 6.196L19 7.327l-4.214 4.1.993 6.115L10 16.318l-5.778 3.224.993-6.115L1 7.327l5.072-.131L10 1z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600 font-bold">4.5</span>
                    <span className="text-gray-500 ml-1">(28)</span>
                  </div>
                </div>
                
              </div>
            </div>
            )
          })}
        </div>
        <div className=" lg:px-6 lg:py-0 md:py-16 md:px-24 py-16 px-6 flex flex-col justify-center items-center text-center ">
       
      </div>
      </div>
      
    </div>
  )
}

export default Products