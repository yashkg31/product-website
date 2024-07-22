import React from 'react'
import classes from './ClickedProduct.module.css';
import ProductsData from '../../data/data';
import { useParams, useLocation } from 'react-router-dom';
import {useState, useEffect} from 'react';


const ClickedProduct = () => {
  // console.log(ProductsData);
  const {pathname} = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const [product,setProduct] = useState({});

  const fetchProduct = async (id) => {
    const response = ProductsData.find(o => o.model === id);
    const {img,desc,model}= response;
    setProduct({
      img,
      desc,
      model
    })
  }

  useEffect( ()=>{
const id = window.location.pathname.split("/");
// console.log(id[2])
fetchProduct(id[2]);

  },[])

  return (
    <>
    <div className={classes["clicked"]}>
        <div className={classes["clicked-container"]}>
            <div className={classes["clicked-product-name"]}>
              <h1>CYBORG <strong>{product.model}</strong></h1> 
            </div>
            <div className={classes["img-desc"]}>
            <div className={classes["clicked-product-img"]}>
              <img src={product.img} alt={product.model} />
            </div>
            <div className={classes["clicked-product-desc"]}>
              <p>{product.desc}</p>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default ClickedProduct
