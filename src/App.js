import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import QRreader from "./components/QRreader";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="/scanner" element={<QRreader />} />

      </Routes>
    </>
  );
}

export default App;
