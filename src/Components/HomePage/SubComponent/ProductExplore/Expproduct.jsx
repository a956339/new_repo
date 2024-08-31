import React, { useEffect, useState } from 'react'
import "../ProductExplore/ProductExplore.css"
import Card from '../../../Card/Card';
import { useDispatch } from 'react-redux';
import { add } from '../../../../Redux-toolkit/Slice';
const Expproduct = () => {

    const [products, setProducts] = useState([]);

  
    const dispatch = useDispatch();
    const handleAdd =(val) =>{
      dispatch(add(val))


      console.log("exp",val.id)
  
    }
  

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);


    return (
        <div>

            <div className="days">
                <div className="darkLine">

                </div>
                <p>Today's</p>
            </div>

            <div className="saleType">
                <h2>Explore Our Products</h2>
            </div>


            <div className="productLists">



                {
                    products.map((val, index) => {
                        return (
                            <Card key={index} image={val.images} title={val.title} price={val.price} rating={val.rating} id={val.id} onClick={handleAdd}/>
                        )
                    }).slice(0, 5)
                }





            </div>

            <div className="FlashAllProductbtn">
                <div className="FlashAllProduct">
                    <p>View All Products</p>
                </div>
            </div>


        </div>
    )
}

export default Expproduct;