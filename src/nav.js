import React from 'react';
import './nav.css';



const Nav = () => {
    return (
    <div>
        <head>
            <link rel="stylesheet" type="text/css" href="nav.css" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <script src="https://kit.fontawesome.com/83b986ce11.js" crossorigin="anonymous"></script>
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500;900&display=swap" rel="stylesheet" />
        </head>

        <section class="navbar">
            <a id="home" href="#store">STORE</a>
            <a href="#products">Products</a>
            <div class="dropdown">
                <button class="dropbtn">
                    <i class="fas fa-user"></i>
                    <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content">
                    <ul>
                        <li>
                            <a href="#profile" class="">Profile</a>
                        </li>
                        <li>
                            <a href="#settings" class="">Settings</a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </div>
    );}

export default Nav;
