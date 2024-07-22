import './App.css';
import Header from "./components/layout/Header";
import Landing from "./components/pages/home/Landing/Landing";
import Service from "./components/pages/home/Service";
import About from "./components/pages/home/About";
import Features from "./components/pages/home/Features";
import Review from "./components/pages/home/Review";
import ClickedProduct from "./components/pages/ClickedProduct";
import Footer from "./components/layout/Footer";
import { Routes, Route,Link, Navigate} from "react-router-dom";
import ProductsSlider from "./components/pages/home/Products/ProductsSlider";
import Careers from "./components/pages/home/Careers";
import  Contact from "./components/pages/contact/Contact";
import Gallery from "./components/pages/gallery/Gallery";
import Construction from "./components/pages/construction/Construction";
// import SideNav from "./components/SideNav/SideNav";
import Irrulas500 from "./components/pages/home/Products/models/irrulas500";

function App() {
  return (
    <> 
    <div className="App">
    <Header />
    <Routes>
      <Route path="/" exact element={
        <Navigate to="/home" />
      } />
    
    <Route path="/home" element={
      <>
       <Landing />
       <Service />
       <ProductsSlider />
       <Features/>
       <About/>
       <Review/>
       <Careers/>
       </>
    } />

    <Route path="/products/:model" element={
      <>
      <ClickedProduct />
      </>
    } />

    <Route path="/contact" element={
    <>
    <Contact />
    </>
    } />

<Route path="/gallery" element={
    <>
    <Gallery />
    </>
    } />

<Route path="/construction" element={
    <>
    <Construction />
    </>
    } />    

    </Routes>
    <Footer />
    </div>
    </>
  );
}

export default App;
