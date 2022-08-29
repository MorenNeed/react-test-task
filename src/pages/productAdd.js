import React, { useEffect } from "react";
import { Link } from 'react-router-dom';

import {
    Header,
    Footer,
    MainAdd
  } from "../components/exports";
import '../styles/header_styles.css';

const HeaderData =
(
  <header>
    <div className="header">
        <div className="header-h1">
            <h1>Product Add</h1>
        </div>
        <div className="buttons">
            <form className="form-buttons">
                <input type="submit" form="product_form" value="Save"/>
                <button type="button"><Link to="/" className="link">Cancel</Link></button>
            </form>
        </div>
    </div>
  </header>
);

function Add()
{
  useEffect(() =>
  {
    document.title = "Product Add";
  });
  return (
    <div className="productAdd">
      <Header HeaderData={HeaderData}/>
      <MainAdd/>
      <Footer/>
    </div>
  );
}

export default Add;