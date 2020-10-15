import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './nav.js';
import Product from './product.js';



function App(){
  return (
  <section>
    <Nav />
    <Product />
      <Product />
      <Product />

    </section>);
}

ReactDOM.render(<App />, document.getElementById("root"));