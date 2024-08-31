


import React, { useRef, useState } from 'react';
import "../Hearder/Navbar.css";
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
const items = useSelector((state)=>state.cart)


  const navigate = useNavigate();
  const [show, newShow] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false); // State to handle sidebar visibility



  const handleCart = () => {
    navigate("/CartPage");
  }



  let profileMenu = ["Home", "Manage my account", "My order", "Logout"];

  const val = useRef();

  const showProfile = () => {
    newShow(true);
  };

  const hideProfile = (e) => {
    if (val.current && !val.current.contains(e.relatedTarget)) {
      newShow(false);
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className='Navbar'>
      <div className="left-header">
        <div className="hamBurgerMenu" onClick={toggleSidebar}>
          <img src="https://www.svgrepo.com/show/532195/menu.svg" alt="" />
        </div>
        <h2 className='h2'>Exclusive</h2>
      </div>
      <div className="middle-header">
        <Link to="/Home" className='Nav-link'>Home</Link>
        <Link to="/Contact" className='Nav-link'>Contact</Link>
        <Link to="/About" className='Nav-link'>About</Link>
        <Link to="/SinUp" className='Nav-link'>Sign Up</Link>
      </div>
      <div className="right-header">
        <div className="header-search-input">
          <input type="text" placeholder='What are you looking for?' />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <i className="fa-regular fa-hearts"></i>
        <i className="fa-regular fa-heart"></i>

        <div className="cartButton" onClick={handleCart}>
          <img src="https://www.svgrepo.com/show/533042/cart-plus.svg" alt="" className='imgs3' />
          <sup className="cart-count">{items.length}</sup>
        </div>


        <div className="profilelogo">
          <img src="https://picsum.photos/200/300" alt="" onMouseEnter={showProfile} />
          {show && (
            <div className="profileDropdown" ref={val} onMouseLeave={hideProfile}>
              {profileMenu.map((val, index) => (
                <div className="listName" key={index} >
                  <p>{val}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>


      {sidebarOpen && (
        <div className="Main_div">


          <div className="sideBAr">
            <Link to="/Home" className='Nav-link' onClick={closeSidebar}>Home</Link>
            <Link to="/Contact" className='Nav-link' onClick={closeSidebar}>Contact</Link>
            <Link to="/About" className='Nav-link' onClick={closeSidebar}>About</Link>
            <Link to="/CartPage" className='Nav-link' onClick={closeSidebar}>Cart</Link>
            <Link to="/SinUp" className='Nav-link' onClick={closeSidebar}>Sign Up</Link>

          </div>

          <div className="crossBtn" onClick={closeSidebar}>
            <i class="fa-solid fa-xmark"></i>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
