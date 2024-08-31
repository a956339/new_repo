import React from 'react'
import "../ProductPage/ProductPage.css"
const ProductPage = () => {
  return (
    <div className='Main_productPage'>

<div className="product-page">
      {/* Image Gallery */}
      <div className="image-gallery">
        <img src="https://rukminim2.flixcart.com/image/128/128/km3s1ow0/motion-controller/f/z/l/xb-gamepad-w360-porro-fino-original-imagf2wfmwy8fjhx.jpeg?q=70&crop=false" alt="Product 1" className="thumbnail" />
        <img src="https://rukminim2.flixcart.com/image/128/128/km3s1ow0/motion-controller/f/z/l/xb-gamepad-w360-porro-fino-original-imagf2wfmwy8fjhx.jpeg?q=70&crop=false" alt="Product 2" className="thumbnail" />
        <img src="https://rukminim2.flixcart.com/image/128/128/km3s1ow0/motion-controller/f/z/l/xb-gamepad-w360-porro-fino-original-imagf2wfmwy8fjhx.jpeg?q=70&crop=false" alt="Product 3" className="thumbnail" />
        <img src="https://rukminim2.flixcart.com/image/128/128/km3s1ow0/motion-controller/f/z/l/xb-gamepad-w360-porro-fino-original-imagf2wfmwy8fjhx.jpeg?q=70&crop=false" alt="Product 4" className="thumbnail" />
      </div>

      {/* Main Product Display */}
      <div className="product-main">
        <img src="https://rukminim2.flixcart.com/image/128/128/km3s1ow0/motion-controller/f/z/l/xb-gamepad-w360-porro-fino-original-imagf2wfmwy8fjhx.jpeg?q=70&crop=false" alt="Main Product" className="main-image" />
      </div>

      {/* Product Details Section */}
      <div className="product-details">
        <h2>Havic HV G-92 Gamepad</h2>
        <div className="rating">
          ⭐⭐⭐⭐ <span>(150 Reviews)</span> | <span className="in-stock">In Stock</span>
        </div>
        <div className="price">$192.00</div>
        <p className="description">
          PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble-free install & mess-free removal. Pressure sensitive.
        </p>

        {/* Color and Size Options */}
        <div className="options">
          <div className="color-options">
            <span>Colours:</span>
            <button className="color-btn blue"></button>
            <button className="color-btn red"></button>
          </div>
          <div className="size-options">
            <span>Size:</span>
            <button className="size-btn">XS</button>
            <button className="size-btn">S</button>
            <button className="size-btn active">M</button>
            <button className="size-btn">L</button>
            <button className="size-btn">XL</button>
          </div>
        </div>

        {/* Quantity and Action Buttons */}
        <div className="quantity">
          <button className="qty-btn">-</button>
          <span className="qty-number">2</span>
          <button className="qty-btn">+</button>
          <button className="buy-now">Buy Now</button>
          <button className="wishlist">❤</button>
        </div>

        {/* Delivery Information */}
        <div className="delivery-info">
          <div className="free-delivery">
            🚚 Free Delivery
            <p>Enter your postal code for Delivery Availability</p>
          </div>
          <div className="return-delivery">
            ↩ Return Delivery
            <p>Free 30 Days Delivery Returns. <span style={{color:"blue"}}>Details</span></p>
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}

export default ProductPage;