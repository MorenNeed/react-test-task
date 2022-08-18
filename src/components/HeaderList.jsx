import React from "react";
import { Link } from 'react-router-dom';
import '../styles/header_styles.css';

function Header() {
  return (
    <header>
        <div className="header">
            <div className="header-h1">
                <h1>Product List</h1>
            </div>
            <div className="buttons">
                <form className="form-buttons">
                    <button type="button"><Link to="/add-product" className="link">ADD</Link></button>
                    <button type="button" id="delete-product-bin">MASS DELETE</button>
                </form>
            </div>
        </div>
    </header>
  );
}

export default Header;