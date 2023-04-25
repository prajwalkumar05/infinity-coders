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
    { id: 1,name:"ecommerece",price: faker.commerce.price(),image:"https://static.wixstatic.com/media/8e636c_1fd4c70d85ea482ea27a963153ded4bd~mv2.jpg/v1/fill/w_625,h_625,al_c,q_85,usm_0.66_1.00_0.01/8e636c_1fd4c70d85ea482ea27a963153ded4bd~mv2.webp",inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]) },
    { id: 2,name:"ecommerece",price: faker.commerce.price(),image:"https://rukminim1.flixcart.com/image/832/832/kw3v0cw0/backpack/o/i/y/woman-and-girls-school-college-leaf-bag-fashion-bag-backpack-original-imag8ugpjfcn8abw.jpeg?q=70",inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]) },
    { id: 3,name:"ecommerece",price: faker.commerce.price(),image:"https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]) },
    { id: 4,name:"ecommerece",price: faker.commerce.price(),image:"https://rukminim1.flixcart.com/image/832/832/kw3v0cw0/backpack/o/i/y/woman-and-girls-school-college-leaf-bag-fashion-bag-backpack-original-imag8ugpjfcn8abw.jpeg?q=70",inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),fastDelivery: faker.datatype.boolean(),
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
