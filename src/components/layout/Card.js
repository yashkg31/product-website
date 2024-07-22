import React from 'react'
import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <>
<div className="card" style="width: 18rem;">
  <img src={props.img} className="card-img-top" alt={props.desc} />
  <div className="card-body">
    <p className="card-text">{props.desc}</p>
  </div>
</div>
</>
  )
}

export default Card
