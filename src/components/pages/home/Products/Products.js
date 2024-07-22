import classes from "./Products.module.css";
import { Routes,Link, Route } from "react-router-dom";

const Products = (props) => {
  return (
    <div className={classes.products}>
      <div className={classes["products-container"]}>
        <div className={classes["product-div"]}>
          <div className={classes["products-img"]}>
            <img src={props.img} alt={props.model} />
          </div>

          <div className={classes["products-info"]}>
            <div className={classes["products-name"]}>
              <h2>
                CYBORG <span>{props.model}</span>
              </h2>
            </div>

            <div className={classes["products-desc"]}>
              <p>{props.desc}</p>
            </div>
            <div className={classes["product-redirect"]}>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;