import classes from "./Careers.module.css";
const Careers = () => {
  return (
    <div className={classes.careers}>
      <div className={classes["careers-container"]}>
        <div className={classes["careers-heading"]}>
          <h1>Want to work </h1>
          <h1>With us ? Hit the button.</h1>
        </div>
        <div className={classes["careers-nav"]}>
          <a href="/">Let's work together</a>
        </div>
      </div>
    </div>
  );
};

export default Careers;