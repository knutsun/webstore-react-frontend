import React from 'react';
import './product.css';

const Product = () => {
    return <article>
        <Name />
        <Image />
        <Description />
        <Price />
    </article>;
}
const Name = () =>
    <h3>Patricia Nash Purse</h3>;

const Image = () =>
    <img src="https://i1.ebayimg.com/images/g/Hn8AAOSwdCdfghtg/s-l140.jpg" alt="" />;

const Description = () =>
    <p>A unique design for a unique you</p>;

const Quantity = () =>
    <h4>4</h4>;

const Price = () =>
    <h4>$50</h4>;


export default Product;
