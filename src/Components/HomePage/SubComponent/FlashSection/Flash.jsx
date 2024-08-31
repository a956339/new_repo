import React, { useEffect, useState } from 'react'
import "../FlashSection/Flash.css"
import Card from '../../../Card/Card';
import {useDispatch  } from 'react-redux'
import { add } from '../../../../Redux-toolkit/Slice';
const Flash = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching data:', error));
  });

  
 const dispatch = useDispatch();
  const handleAdd =(val) =>{
    dispatch(add(val))

  }

  return (
    <div className="FlashMainContainer">
      <div className="days">
        <div className="darkLine"></div>
        <p>Today's</p>
      </div>

      <div className="saleType">
        <h2>Flash Sale</h2>
      </div>

      <div className="FlashSlider">
        {products.map((val, index) => (
         <Card key={index} image={val?.image} title={val?.title} rating={val?.rating} price={val.price} id={val.id} onClick={handleAdd}/>
        )).slice(0 , 6)}
      </div>

      <div className="FlashAllProductbtn">
        <div className="FlashAllProduct">
          <p>View All Products</p>
        </div>
      </div>
    </div>
  );
}

export default Flash;
