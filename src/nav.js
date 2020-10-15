import React from 'react';
import './nav.css';



const Nav = () => {
    return (

        <section className="navbar">
            <a id="home" href="#store">STORE</a>
            <a href="#products">Products</a>
            <div className="dropdown">
                <button className="dropbtn">
                    <i className="fa fa-user"></i>
                    <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content">
                    <ul>
                        <li>
                            <a href="#profile" className="">Profile</a>
                        </li>
                        <li>
                            <a href="#settings" className="">Settings</a>
                        </li>
                    </ul>
                </div>
            </div>
            <a id="cart" href="#cart">
                <i className="fa fa-shopping-cart"></i>       ()
            </a>
        </section>

    );}

export default Nav;
