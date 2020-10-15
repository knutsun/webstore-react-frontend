import React from "react";
import ReactDOM from 'react-dom';
import Head from "./head.js";
import Nav from './nav.js';
import Products from './product.js';



function App(){

  return (
    <html>
      <Head />
      <body>
        <Nav />
        <Products />
      </body>
    </html>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));