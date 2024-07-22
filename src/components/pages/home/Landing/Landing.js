import classes from "./Landing.module.css";
import LandingSlider from "./LandingSlider";

const Landing = () => {

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
    <div id="landing" className={classes.landing}>
      <div className={classes["landing-container"]}>
        <LandingSlider />

        <div className={classes["landing-banner"]}>
          <div className={classes["banner-container"]}>
            <div className={classes["banner-heading"]}>
              <h1>MOMENTUM</h1>
              <h1>ROBOTICS</h1>
            </div>
            <div className={classes["banner-caption"]}>
              <p>We automate to leverage growth</p>
            </div>
            <div className={classes["banner-nav"]}>
            <a href="/" onClick={ (e) => handleClick(e,"products")}> Our Solutions</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;