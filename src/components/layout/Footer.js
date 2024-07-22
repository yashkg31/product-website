import classes from "./Footer.module.css";
import brandIcon from "../assets/logos/3-removebg-preview.png";
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes["footer-container"]}>
        <div className={classes["footer-about"]}>
          <div className={classes["footer-heading"]}>
            <h2>ABOUT US</h2>
          </div>
          <div className={classes["footer-about-caption"]}>
            <p>
              A product technology company <br />providing next gen logistics solution.
            </p>
          </div>
          <div className={classes["footer-brand"]}>
            <Link to="/"><img src={brandIcon} alt="logo" /></Link>
          </div>
        </div>
        <div className={classes["footer-contact"]}>
          <div className={classes["footer-heading"]}>
            <h2>CONTACT INFO</h2>
          </div>
          <div className={classes["footer-address"]}>
            <p>
              <strong>Address</strong> :Dynamic Logistics Trade Park, Bhosari Pune MH - 411015
            </p>

            <p><strong>Phone</strong> : +91 965733 5122</p>
            {/* <p>Our Photo Gellary</p> */}
          </div>
        </div>
        {/* <div className={classes["footer-important"]}>
          <div className={classes["footer-heading"]}>
            <h2>IMPORTANT LINK</h2>
          </div>
          <div className={classes["footer-links"]}>
            <a href="/">View Project</a>
            <a href="/">Contact Us</a>
            <a href="/">Testimonial</a>
            <a href="/">Properties</a>
            <a href="/">Support</a>
          </div>
        </div> */}
        <div className={classes["footer-newsletter"]}>
          <div className={classes["footer-heading"]}>
            <h2>NEWSLETTER</h2>
          </div>
          <p>Coming soon....</p>
          <div className={classes["footer-newsletter-input"]}>
            <input
              placeholder="email address"
              className={classes["newsletter-email"]}
            />
            <div className={classes["input-icon"]}>
              <i class="fas fa-paper-plane"></i>
            </div>
          </div>
        </div>
      </div>
      <div className={classes["footer-bottom-nav"]}>
        <div className={classes["footer-bottom-social-links"]}>
          <a
            href="https://www.linkedin.com/company/momentum-robotics/mycompany/"
            style={{
              color: "white",
            }}
          >
            <i class="fab fa-facebook"></i>
          </a>
        </div>
        <div className={classes["footer-bottom-social-links"]}>
          <a
            href="https://www.linkedin.com/company/momentum-robotics/mycompany/"
            style={{
              color: "white",
            }}
          >
            <i class="fab fa-instagram"></i>
          </a>
        </div>
        <div className={classes["footer-bottom-social-links"]}>
          <a
            href="https://www.linkedin.com/company/momentum-robotics/mycompany/"
            style={{
              color: "white",
            }}
          >
            <i class="fab fa-linkedin"></i>
          </a>
        </div>
        <div className={classes["footer-bottom-social-links"]}>
          <a
            href="https://momentumrobotics.in/"
            style={{
              color: "white",
            }}
          >
            <i class="fab fa-chrome"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;