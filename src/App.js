
import './App.css';
import About from './Pages/About';
import { Footer } from './Pages/Footer';
import Header from './Pages/Header';
import Map from './Pages/Map';
import Navbar from './Pages/Navbar';
import Process from './Pages/Process';
import Products from './Pages/Products';


import Home from './components/Home';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Process />
      <Products />
      <Map />
      <Footer />
      
      
    </>
  );
}

export default App;
