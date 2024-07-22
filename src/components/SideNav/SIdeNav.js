import classes from "./SideNav.module.css";

import { Link } from "react-router-dom";
import React from "react";
import { sideNavActions } from "../store/sideNav-slice";
import { useDispatch, useSelector } from "react-redux";
import brandLogo from "../assets/logos/3new-removebg-preview.png";

const SideNav = () => {
  const dispatch = useDispatch();

  const sideNavHandler = useSelector((state) => state.sideNav.show);
  const hideSideNavHandler = () => {
    dispatch(sideNavActions.hideSideNav());
  };
  return (
    <div className={classes["sideNav-wrap"]}>
      {sideNavHandler && (
        <React.Fragment>
          <div
            className={classes["sidenav-backdrop"]}
            onClick={hideSideNavHandler}
          />

          <div className={classes.sideNav}>
            <div className={classes["sideNav-links"]}>
              <div className={classes["close-nav"]}>
                <i class="far fa-times-circle"></i>
              </div>
              <div className={classes["nav-links"]}>
                <Link to="/" className={classes["link-div"]}>
                  <a href="/">Home</a>
                </Link>
                <Link to="/blog" className={classes["link-div"]}>
                  <a href="/blog">Blogs</a>
                </Link>
                <Link to="/industries" className={classes["link-div"]}>
                  <a href="/industries">Industries</a>
                </Link>

                <Link to="/" className={classes["link-div"]}>
                  <a href="/">Features</a>
                </Link>
              </div>

              {/* <div className={classes["nav-contact"]}>
                <a href="/www">Contact Us</a>
                <a href="/kjk">About us</a>
              </div> */}
            </div>

            <div className={classes["nav-brand"]}>
              <img src={brandLogo} alt="brand logo" />
              <div className={classes["social-icons"]}>
                <div className={classes["sidenav-bottom-social-links"]}>
                  <a
                    href="https://www.linkedin.com/company/momentum-robotics/mycompany/"
                    style={{
                      color: "white",
                    }}
                  >
                    <i class="fab fa-facebook"></i>
                  </a>
                </div>
                <div className={classes["sidenav-bottom-social-links"]}>
                  <a
                    href="https://www.linkedin.com/company/momentum-robotics/mycompany/"
                    style={{
                      color: "white",
                    }}
                  >
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>
                <div className={classes["sidenav-bottom-social-links"]}>
                  <a
                    href="https://www.linkedin.com/company/momentum-robotics/mycompany/"
                    style={{
                      color: "white",
                    }}
                  >
                    <i class="fab fa-linkedin"></i>
                  </a>
                </div>
                <div className={classes["sidenav-bottom-social-links"]}>
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
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default SideNav;