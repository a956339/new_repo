import React from 'react'

import style from "../Card/Card.module.css"

import { useNavigate } from 'react-router-dom'
const Card = ({image,title,price,rating ,id,onClick}) => {

  const navigate = useNavigate();

  return (
    <div className={style.Products}>
    <div className={style.image} onClick={()=>navigate("/ProductPage")}>
      <img src={image} alt={title} />
    </div>
    <p className={style.Product_Title}>{title.substring(0, 25)}...</p>
    <p className={style.Product_Price}>${price}</p>
    <div className={style.rating}>
    <p className={style.icons}><i className="fa-regular fa-star"></i></p>
    <p className={style.icons}><i className="fa-regular fa-star"></i></p>
    <p className={style.icons}><i className="fa-regular fa-star"></i></p>
    <p className={style.icons}><i className="fa-regular fa-star"></i></p>
    <p className={style.icons}><i className="fa-regular fa-star"></i></p>
      <p>(90)</p>
    </div>

    <div className={style.addProductButton} onClick={()=>onClick({image,title,price,rating ,id})}>
      <div className={style.buttonAdd}>
        <p>Add to Cart</p>
      </div>
    </div>
    
    </div>
  )
}

export default Card;