import './Header.css';
import brandImg from "../assets/logos/3new-removebg-preview.png";
// import { Link } from "react-scroll";
// import { sideNavActions } from "../store/sideNav-slice";
// import { useDispatch } from "react-redux";
import { useState } from "react";
import {Link,Navigate} from "react-router-dom";
import Topbar from "./Topbar";
const Header = () => {
  // const dispatch = useDispatch();
  // const hamMenuClickHandler = () => {
  //   console.log("clicked");
  //   dispatch(sideNavActions.showSideNav());
  // };

  const [hideOnScroll, setHideOnScroll] = useState(true);

  const hideTopbar = () => {
    if (window.scrollY > 400) setHideOnScroll(false);
    else setHideOnScroll(true);
  };
  window.addEventListener("scroll", hideTopbar);

  const handleClick = (e,id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if(element){
    var headerOffset = 60;
    var elementPosition = element.offsetTop;
    var offsetPosition = elementPosition - headerOffset;
    document.documentElement.scrollTop = offsetPosition;
    document.body.scrollTop = offsetPosition;
    }
  
  }
  return (
    <div className="header">
      {hideOnScroll && <Topbar />}
      <div className="header-container">
        <div className="ham-menu-icon">
          <i class="fas fa-bars"></i>
        </div>
        <div className="header-brand">
            <Link to="/"><img src={brandImg} alt="brandlogo" /></Link>
        </div>

        <div className="header-links">
          <div className="header-nav-links">
         
              <div className="nav-link"><a href="/" onClick={ (e) => handleClick(e,"landing")}>Home</a></div>
         
              <div className="nav-link"><a href="/" onClick={ (e) => handleClick(e,"services")}>Industries</a></div>

              <div className="nav-link"><a href="/" onClick={ (e) => handleClick(e,"products")}>Products</a></div>
          
              <div className="nav-link"><a href="/" onClick={ (e) => handleClick(e,"features")}>Features</a></div>

              <div className="nav-link"><a href="/" onClick={ (e) => handleClick(e,"about")}>About Us</a></div>

              <div className="nav-link"><Link to="/gallery">Gallery</Link></div>         
              {/* {" "}
              <div className="nav-link"><a href="/blog">Blog</a></div>
            
           
              {" "}
              <div className="nav-link"><a href="/contact">Contact</a></div> */}
          
          </div>
          <div className="header-touch-container"></div>
          
          <Link to="contact" className='header-touch'><span>Get In Touch</span></Link>
            
        </div>
      </div>
    </div>
  );
};

export default Header;