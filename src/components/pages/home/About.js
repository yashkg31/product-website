import classes from "./About.module.css";
// eslint-disable-next-line
import safeIndustry from "../../assets/images/safe_industery_1.jpg";
import worldIcon from "../../assets/images/aleart_icon.png";
import autonomousImg from "../../assets/images/robot-arm-picks-up-box-autonomous.jpg";
const About = () => {
  return (
    <div className={classes.about} id="about">
      <div className={classes["container-wrap"]}>
        <div className={classes["about-heading"]}>
          <h1>About Us</h1>
        </div>
        <div className={classes["about-container"]}>
          <div className={classes["about-left"]}>
            <div className={classes["about-desc-highlight"]}>
              <p>
                The past few decades have brought monumental changes to the
                world of Supply Chain Management (SCM), Logistics and especially
                in material handling. The rising costs of skilled workers,
                shrinkage in quality output, time bounded deliveries and
                production output have put the SCM and Logistics in a
                challenging mode.
              </p>
            </div>
            <br />
            <br />
            <div className={classes["about-desc"]}>
              <p>
                We develop products keeping in mind the next generation of
                mobility. Mobiliya Robotics offers industrial robots with a wide
                range of versions and payload capacities. We are committed for
                lower operating costs and a faster return on investment. This
                makes Mobiliya Robotics range of products quite popular in the
                field of autonomous material handling equipments.
              </p>
              <br />
              <br />
              <p>
                We are a Start-up India initiative, having a team of certified
                and experts committed to provide tailor made solutions and its
                implementation across the industries. We believe in enhancing
                the internal logistics operations by means of technology. Our
                Robotic Solutions for internal material movement will define new
                edge to the warehousing logistics and manufacturing hubs.
              </p>
            </div>
            <div className={classes["about-nav-btn"]}>
              <a href="/">Contact us</a>
            </div>
          </div>
          <div className={classes["about-right"]}>
            <div className={classes["about-right-container"]}>
              <img
                src={autonomousImg}
                alt="safeindustry"
                className={classes["auto-img"]}
              />
              <div className={classes["img-hero"]}>
                <div className={classes["img-hero-container"]}>
                  <div className={classes["img-hero-header"]}>
                    <div className={classes["img-hero-icon"]}>
                      <img src={worldIcon} alt="world" />
                    </div>
                    <div className={classes["img-hero-heading"]}>
                      <h1>OUR MISSION</h1>
                    </div>
                  </div>
                  <div className={classes["img-hero-desc"]}>
                    <p>
                      To provide best in class customized Automation Solutions
                      for Internal Logistics and Material Movement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;