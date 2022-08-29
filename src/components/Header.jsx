import React from "react";
import '../styles/header_styles.css';

export default class HeaderComponent extends React.Component
{
  constructor(props)
  {
    super(props);
    this.data = this.props.HeaderData;
  }
  render()
  {
    return this.data;
  }
}