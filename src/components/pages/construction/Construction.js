import React from 'react';
import classes from "./Construction.module.css";
import image from "./../../assets/logos/under-construction.png";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";

function Construction() {

    const {pathname} = useLocation();

    useEffect(() => {
        window.scrollTo(0,0);
    },[pathname])

  return (
    <>
    <div className={classes.construction} id="construction">
        <div className={classes["construction-container"]}>
            <div className={classes["construction-heading"]}>
                <h2>Under Construction</h2> 
            </div>
            <div className={classes["construction-image"]}>
                <a href='/'><img src={image} alt="Under Construction" /></a>
            </div>
        </div>
    </div>

    </>
  )
}

export default Construction
