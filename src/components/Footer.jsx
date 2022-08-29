import React from "react";
import '../styles/footer_styles.css';

export default class FooterComponent extends React.Component
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
  render()
  {
    return this.data;
  }
}