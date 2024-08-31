import React, { useState } from 'react';
import "../CartPage/CartPage.css";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { quantityDelete , quantityAdd } from '../../Redux-toolkit/Slice';
const CartPage = () => {

const dispatch = useDispatch();

    // const [incQuantity, setincQuantity] = useState(0)
const HandleQuantity =(e,id,quantity)=>{
    // setincQuantity(e.target.value,val.id,val.quantity);
    console.log(e.target.value,quantity)
    if(e.target.value > 0 && e.target.value < quantity){
        dispatch(quantityDelete(id,e.target.value))
    }else if(e.target.value > 0 && e.target.value > quantity){
        dispatch(quantityAdd(id,e.target.value))
    }

}


    const navigate = useNavigate()
    const items = useSelector((state) => state.cart);
    console.log(items);

    return (
        <div className="CartPageMaincontainer">
            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {items.length > 0 ? (
                        items.map((val, index) => (
                            
                            <tr key={index}>
                                <td><img src={val.image} alt="" /></td>
                                <td>$ {val.price}</td>
                                <td><input type="number" min={1} max={10} defaultValue={val.quantity}  onChange={(e)=>HandleQuantity(e,val.id,val.quantity)}/></td>
                                <td>{val.price}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4"><h3 >No products added to cart</h3></td>
                        </tr>
                    )}
                </tbody>
            </table>

            <div className="menus">
                <div className="returnBtn" onClick={()=>navigate("/Home")}>
                    <p>Return to shop</p>
                </div>
                <div className="returnBtn">
                    <p>Update Cart</p>
                </div>
            </div>

            <div className="subTotal">
                <div className="Coupon">
                    <input type="text" placeholder='Enter coupon code' />
                    <div className="couponBtn">
                        <p>Apply Coupon</p>
                    </div>
                </div>
               
                <div className="coupon-and-total">
                    <div className="cart-total">
                        <h3>Cart Total</h3>
                        <div className="total-line">
                            <span>Subtotal:</span>
                            <span>$2000</span>
                        </div>
                        <div className="total-line">
                            <span>Shipping:</span>
                            <span>Free</span>
                        </div>
                        <div className="total-line">
                            <span>Total:</span>
                            <span>$20000</span>
                        </div>
                        <button className="checkout-btn">Proceed to checkout</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartPage;
