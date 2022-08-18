import React from "react";
import '../styles/mainAdd_styles.css';
import Components from './Components';

class MainComponent extends Components
{
  constructor()
  {
    super();
    this.data =
    (
      <>
        <hr className="hr" />
        <main>
          <div className="productAdd-main">
            <ProductForm/>
          </div>
        </main>
        <hr className="hr"/>
      </>
    );
  }
}
class DinamicalElement extends React.Component
{
  render()
  {
    return(
      <div className="dinamicalElement" id={this.props.id}>
        {this.props.labels}
      </div>
    );
  }
}
class ProductForm extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {value: 'Type Switcher'};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.DinEl = new DinamicalElement(this.state);
  }
  handleChange(event)
  {
    this.setState(
      {
        value: event.target.value
      });
  }
  handleSubmit(event)
  {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }
  render()
  {
    return (
      <form id="product_form" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label for="sku">SKU</label>
          <input type="text" id="sku" />
        </div>
        <div className="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" />
        </div>
        <div className="form-group">
          <label for="price">Price ($)</label>
          <input type="text" id="price" />
        </div>
        <div className="form-group">
          <label for="productType">Type Switcher</label>
          <select className="form-select" value={this.state.value} onChange={this.handleChange}>
            <option>Type Switcher</option>
            <option>DVD</option>
            <option>Furniture</option>
            <option>Book</option>
          </select>
        </div>
        <DinamicalElement id={this.state.value}/>
      </form>
    );
  }
}

function MainAdd()
{
  const Main = new MainComponent();
  return <>{Main.reveal()}</>;
}

export default MainAdd;