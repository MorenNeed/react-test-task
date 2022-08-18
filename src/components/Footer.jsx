import React from "react";
import '../styles/footer_styles.css';
import Components from './Components';

class FooterComponent extends Components
{
  constructor()
  {
    super();
    this.data =
    (
      <footer>
        <div className="footer">
            <p>Scandiweb test assignment</p>
        </div>
      </footer>
    );
  }
}

function Footer()
{
  const Footer = new FooterComponent();
  return <>{Footer.reveal()}</>;
}

export default Footer;