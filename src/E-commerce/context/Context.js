import { createContext, useContext, useReducer } from "react";
import faker from "faker"
import { cartReducer, productReducer } from "./Reducers";

const Cart = createContext();
faker.seed(99);

const Context = ({ children }) => {
  // const products = [...Array(20)].map(() => ({
  //   id: faker.datatype.uuid(),
  //   name: faker.commerce.productName(),
  //   price: faker.commerce.price(),
  //   image: faker.random.image(),
  //   inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
  //   fastDelivery: faker.datatype.boolean(),
  //   ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  // }));



  let products = [
    { id: 1,name:"Shoes",price: faker.commerce.price(),image:"https://static.wixstatic.com/media/8e636c_1fd4c70d85ea482ea27a963153ded4bd~mv2.jpg/v1/fill/w_625,h_625,al_c,q_85,usm_0.66_1.00_0.01/8e636c_1fd4c70d85ea482ea27a963153ded4bd~mv2.webp",inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]) },


    { id: 2,name:"Bag",price: faker.commerce.price(),image:"https://rukminim1.flixcart.com/image/832/832/kw3v0cw0/backpack/o/i/y/woman-and-girls-school-college-leaf-bag-fashion-bag-backpack-original-imag8ugpjfcn8abw.jpeg?q=70",inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]) },


    { id: 3,name:"ecommerece",price: faker.commerce.price(),image:"https://rukminim1.flixcart.com/image/832/832/jvmpci80/shirt/p/d/d/m-sys-b4003-funday-fashion-original-imafgfwjrtjhg852.jpeg?q=70",inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]) },


    { id: 4,name:"Shirt",price: faker.commerce.price(),image:"https://rukminim1.flixcart.com/image/832/832/jvmpci80/shirt/p/d/d/m-sys-b4003-funday-fashion-original-imafgfwjrtjhg852.jpeg?q=70",inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]) },

    { id: 5,name:"Bag",price: faker.commerce.price(),image:"https://rukminim1.flixcart.com/image/612/612/xif0q/backpack/z/b/4/2-saturn-15-n08904-06-backpack-national-geographic-0-1-20-original-imaggd4uf86ydkwb.jpeg?q=70",inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]) },

    { id: 6,name:"Shirt",price: faker.commerce.price(),image:"https://rukminim1.flixcart.com/image/832/832/kwzap3k0/shirt/u/c/6/xxl-lstr-black-p-v-creations-original-imag9jggw5pxzjfg.jpeg?q=70",inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]) },

    { id: 7,name:"shoes",price: faker.commerce.price(),image:"https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/u/a/5/-original-imagg7em3fmnhsa4.jpeg?q=70",inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]) },

    { id: 8,name:"shirt",price: faker.commerce.price(),image:"https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/6/j/s/m-khsh000246-ketch-original-imag7unapg3qhuzv-bb.jpeg?q=70",inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]) },

    { id: 9,name:"T-Shirt",price: faker.commerce.price(),image:"https://rukminim1.flixcart.com/image/832/832/kflftzk0-0/t-shirt/k/7/q/m-1830401-roadster-original-imafwyfbfnkynuzk.jpeg?q=70",inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]) },

    { id: 10,name:"Bag",price: faker.commerce.price(),image:"https://rukminim1.flixcart.com/image/832/832/kd7pevk0/backpack/v/3/y/backpack-with-laptop-compartment-casual-school-college-black-original-imafu69nwsfaz4jc.jpeg?q=70",inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]) },
];

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
  });

  console.log(productState);

  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;
