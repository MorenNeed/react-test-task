import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import {
  Header,
  Footer,
  MainList
} from "../components/exports";
import '../styles/header_styles.css';

const HeaderData =
(
  <header>
    <div className="header">
        <div className="header-h1">
            <h1>Product List</h1>
        </div>
        <div className="buttons">
            <form className="form-buttons">
                <button type="button"><Link to="/add-product" className="link">ADD</Link></button>
                <input type="submit" id="delete-product-bin" form="delete_form" value="MASS DELETE"/>
            </form>
        </div>
    </div>
  </header>
);

function List()
{
  useEffect(() =>
  {
    document.title = "Product List";
  });
  return (
    <div className="productList">
      <Header HeaderData={HeaderData}/>
      <MainList/>
      <Footer/>
    </div>
  );
}
export default List;