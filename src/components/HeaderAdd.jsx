import React from "react";
import { Link } from 'react-router-dom';
import '../styles/header_styles.css';
import Components from './Components';

class HeaderComponent extends Components
{
  constructor()
  {
    super();
    this.data =
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
  }
}

function Header()
{
  const Header = new HeaderComponent();
  return <>{Header.reveal()}</>;
}

export default Header;