import React, { useEffect, useState } from 'react'
import "../Best-selling-product/Selling.css"
import Card from '../../../Card/Card';
import { useDispatch } from 'react-redux';
import { add } from '../../../../Redux-toolkit/Slice';

const Selling = () => {

  const [products, setProducts] = useState([]);



  const dispatch = useDispatch();
  const handleAdd =(val) =>{
    dispatch(add(val))
    console.log("selling",val.id)
  }


  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(data =>setProducts(data))
      .catch(error => console.error('Error fetching data:', error));
  },[]);
    return (
        <div>

            <div className="days">
                <div className="darkLine">

                </div>
                <p>Today's</p>
            </div>

            <div className="Best_sell_View_all">
                <h2>Best Selling Products</h2>
                <div className="Best_view_all">
                    <p>View All</p>
                </div>
            </div>


<div className="sellingProductList">




{
  products.map((val,index)=>{

    console.log(val);
    return(
      <Card key={index} image={val.images} title={val.title} price={val.price} id={val.id} onClick={handleAdd}/>
    )
  }).slice(4,15)
}
        

          </div>
        </div>
    )
}

export default Selling