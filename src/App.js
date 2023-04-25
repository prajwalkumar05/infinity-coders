import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import QRreader from "./components/QRreader";
import LoginModel from "./components/LoginModel";
import Signin from "./components/Signin";
import Main from "./E-commerce/Main";
import Cart from "./E-commerce/components/Cart";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="/scanner" element={<QRreader />} />
        <Route path="/login" element={<LoginModel />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/shop" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
