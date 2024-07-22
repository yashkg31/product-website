import arrowIcon from "../../assets/images/arrow_icon.png";
import classes from "./Service.module.css";
import {Link} from "react-router-dom";

const Service = () => {
  return (
    <div className={classes.services} id="services">
      <div className={classes["services-container"]}>
        <div className={classes["services-offered"]}>
          <div className={classes["services-header"]}>
            <div className={classes["services-icon"]}>
              <div className={classes["services-icons"]}>
                <i class="fas fa-robot"></i>
              </div>
            </div>
            <div className={classes["services-heading"]}>
              <h2>Automotive Manufacturing Enabler </h2>
            </div>
          </div>
          <div className={classes["services-desc"]}>
            <p>
              We enable production and assembly lines logistics tasks with our
              collaborative mobile robots to handle raw material in and out.
            </p>
          </div>
          <div className={classes["services-nav-btn"]}>
            <Link to="/construction"><img src={arrowIcon} alt="" /></Link>
          </div>
        </div>
        <div className={classes["services-offered"]}>
          <div className={classes["services-header"]}>
            <div className={classes["services-icon"]}>
              <div className={classes["services-icons"]}>
                <i class="fas fa-truck-loading"></i>
              </div>
            </div>
            <div className={classes["services-heading"]}>
              <h2>Heavy industry material mover</h2>
            </div>
          </div>
          <div className={classes["services-desc"]}>
            <p>
              We enable production and assembly lines logistics tasks with our
              collaborative mobile robots to handle raw material in and out.
            </p>
          </div>
          <div className={classes["services-nav-btn"]}>
          <Link to="/construction"><img src={arrowIcon} alt="" /></Link>
          </div>
        </div>
        <div className={classes["services-offered"]}>
          <div className={classes["services-header"]}>
            <div className={classes["services-icon"]}>
              <div className={classes["services-icons"]}>
                <i class="fas fa-warehouse"></i>
              </div>
            </div>
            <div className={classes["services-heading"]}>
              <h2>FMCG/Warehousing </h2>
            </div>
          </div>
          <div className={classes["services-desc"]}>
            <p>
              Our robotics fleet can be deployed to carry out various tasks
              precisly and efficeintly in warehouses.
            </p>
          </div>
          <div className={classes["services-nav-btn"]}>
          <Link to="/construction"><img src={arrowIcon} alt="" /></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;