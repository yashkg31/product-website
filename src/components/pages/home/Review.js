import classes from "./Review.module.css";
import quote from "../../assets/images/testimonial.png";
import customerIcon from "../../assets/images/Homepage_testi.png";
const Review = () => {
  return (
    <div className={classes.review}>
      <div className={classes["review-container"]}>
        <img src={quote} alt="quote" className={classes["review-quote"]} />
        <div className={classes["review-desc"]}>
          <p>
            This team is higly aspirational. I beleive on their vision of
            <br />
            transofrming logistics for warehousing and manufacturing for next
            gen growth.
          </p>
        </div>
        <div className={classes["review-customer"]}>
          <div className={classes["customer-icon"]}>
            <img src={customerIcon} alt="consumer" />
          </div>
          <div className={classes["customer-detail"]}>
            <p className={classes["customer-name"]}>Mr. Suhas Dhole</p>
            <p className={classes["customer-designation"]}>
              {" "}
              Warehouse manager, <br />
              John Degree
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;