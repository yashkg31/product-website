import classes from "./Features.module.css";
import gallery1 from "../../assets/images/gallery_1.png";
import gallery2 from "../../assets/images/gallery_2.png";
import gallery3 from "../../assets/images/gallery_3.png";
const Features = () => {
  return (
    <div className={classes.features} id="features">
      <div className={classes["feature-container"]}>
        <div className={classes["feature-heading"]}>
          <h1>Technology led Features</h1>
        </div>
        <div className={classes["feature-gallery"]}>
          <div className={classes["feature-box-1"]}>
            <div className={classes["feature-box-1-overlay"]}>
              <div className={classes["desc-container"]}>
                <h1>01.</h1>

                <h2>Autonomous Mapping and planning</h2>
                <p>
                  Our solution is technolgy driven, we impliment advance
                  technology to acheive highest order of precision fro our AMRs.
                </p>

                <a href="/">Read more</a>
              </div>
            </div>
            <img src={gallery1} alt="Autonomous Mapping and planning" />
            <div className={classes["feature-box-desc"]}>
              <div className={classes["desc-container"]}>
                <h1>01.</h1>

                <h2>Autonomous Mapping and planning</h2>
              </div>
            </div>
          </div>
          <div className={classes["feature-box-2"]}>
            <div className={classes["feature-box-2-overlay"]}>
              <div className={classes["desc-container"]}>
                <h1>02.</h1>

                <h2>Advanced Robotics Fleet</h2>
                <p>
                  We make available our platform as Robotics fleet to carry of
                  various tasks collaborately with exsting resources.
                </p>

                <a href="/">Read more</a>
              </div>
            </div>
            <img src={gallery2} alt="Advanced Robotics Fleet" />
            <div className={classes["feature-box-desc"]}>
              <div className={classes["desc-container"]}>
                <h1>02.</h1>

                <h2>Advanced Robotics Fleet</h2>
              </div>
            </div>
          </div>
          <div className={classes["feature-box-3"]}>
            <div className={classes["feature-box-3-overlay"]}>
              <div className={classes["desc-container"]}>
                <h1>03.</h1>

                <h2>Dashboard and Analytics</h2>
                <p>
                  We offer Remote dashboard for robot's managment and task
                  allocation with generation of advanced analytical reports for
                  business processes.
                </p>

                <a href="/">Read more</a>
              </div>
            </div>
            <img src={gallery3} alt="Dashboard and Analytics" />
            <div className={classes["feature-box-desc"]}>
              <div className={classes["desc-container"]}>
                <h1>03.</h1>

                <h2>Dashboard and Analytics</h2>
              </div>
            </div>
          </div>
          <div className={classes["feature-box-4"]}>
            <div className={classes["feature-box-4-overlay"]}>
              <div className={classes["desc-container"]}>
                <h1>04.</h1>

                <h2>Easy front and back integration</h2>
                <p>
                  Our solutions is collaborative and easily integrable with
                  exsiting resources; Company ERP and machinary.
                </p>

                <a href="/">Read more</a>
              </div>
            </div>
            <img src={gallery2} alt="Easy front and back integration" />
            <div className={classes["feature-box-desc"]}>
              <div className={classes["desc-container"]}>
                <h1>04.</h1>

                <h2>Easy front and back integration</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;