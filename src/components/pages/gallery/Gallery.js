import React,{useEffect} from 'react'
import classes from "./Gallery.module.css";
import Gallerydata from './../../../data/Gallerydata';
import Card from "./../../layout/Card";
import {useLocation} from "react-router-dom";

function Gallery() {
  const {pathname} = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
    <div className={classes.gallery} id="gallery">
        <div className={classes["gallery-header"]}>
            <span>Gallery</span>
        </div>
<div className="row row-cols-1 row-cols-md-3 g-4">
  {/* <div className="col">
    <div className={classes["card"]}>
      <img src={image1} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className={classes["card"]}>
      <img src={image2} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className={classes["card"]}>
      <img src={image3} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className={classes["card"]}>
      <img src={image4} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>

  <div className="col">
    <div className={classes["card"]}>
      <img src={image5} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>

  <div className="col">
    <div className={classes["card"]}>
      <img src={image6} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>

  <div className="col">
    <div className={classes["card"]}>
      <img src={image7} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>

  <div className="col">
    <div className={classes["card"]}>
      <img src={image8} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div> */}

  {
    Gallerydata.map((data) => {
      return(
      <div className="col" key={data.id}>
      <div className={classes["card"]}>
      <img src={data.image} className="card-img-top" alt={data.desc} />
      <div className={classes["card-body"]}>
        <h5 className={classes["card-title"]}>{data.desc}</h5>
        <p className={classes["card-text"]}>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
      )
    })
  }


</div>
    </div>
    </>
  )
}

export default Gallery
