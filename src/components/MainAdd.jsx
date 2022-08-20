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
class ProductForm extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state =
    {
      formSelect: 'Type Switcher',
      sku: '',
      name: '',
      price: '',
      size: '',
      height: '',
      width: '',
      length: '',
      weight: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event)
  {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState(
      {
        [name] : value
      });
  }
  validateData(data)
  {
    console.log(data.type);
  }
  handleSubmit(event)
  {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.forEach(el =>
      {
        if(el === '')
        {
          alert("Please, submit required data");
        }
        else
        {
          console.log(el);
        }
      });
  }
  render()
  {
    return (
      <form id="product_form" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="sku">SKU</label>
          <input type="text" id="sku" name="sku" value={this.state.sku} onChange={this.handleChange}/>
        </div>
        <p>{this.state.sku_invalid}</p>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={this.state.name} onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="price">Price ($)</label>
          <input type="text" id="price" name="price" value={this.state.price} onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="productType">Type Switcher</label>
          <select className="form-select" name="formSelect" value={this.state.formSelect} onChange={this.handleChange}>
            <option disabled>Type Switcher</option>
            <option>DVD</option>
            <option>Furniture</option>
            <option>Book</option>
          </select>
        </div>
        <DynamicalElement id={this.state.formSelect}/>
      </form>
    );
  }
}
class DynamicalElement extends ProductForm
{
  render()
  {
    const components =
    {
      TypeSwitcher,
      DVD,
      Furniture,
      Book
    }
    const Component = components[(this.props.id).replace(/ /g, '')];
    return(
      <div className="dynamicalElement" id={(this.props.id).replace(/ /g, '')}>
        <Component/>
      </div>
    );
  }
}
class TypeSwitcher extends DynamicalElement
{
  render()
  {
    return(<></>);
  }
}
class DVD extends DynamicalElement
{
  render()
  {
    return(
      <>
        <div className="dynamical-form-group">
          <label htmlFor="size">Size (MB)</label>
          <input type="text" id="size" name="size" value={this.state.size} onChange={this.handleChange}/>
        </div>
        <div className="description">
          <p>* Please, provide size</p>
        </div>
      </>
    );
  }
}
class Furniture extends DynamicalElement
{
  render()
  {
    return(
      <>
        <div className="dynamical-form-group">
          <label htmlFor="height">Height (CM)</label>
          <input type="text" id="height" name="height" value={this.state.height} onChange={this.handleChange}/>
        </div>
        <div className="dynamical-form-group">
          <label htmlFor="width">Width (CM)</label>
          <input type="text" id="width" name="width" value={this.state.width} onChange={this.handleChange}/>
        </div>
        <div className="dynamical-form-group">
          <label htmlFor="length">Length (CM)</label>
          <input type="text" id="length" name="length" value={this.state.length} onChange={this.handleChange}/>
        </div>
        <div className="description">
          <p>* Please, provide dimensions in HxWxL format</p>
        </div>
      </>
    );
  }
}
class Book extends DynamicalElement
{
  render()
  {
    return(
      <>
        <div className="dynamical-form-group">
          <label htmlFor="weight">Weight (KG)</label>
          <input type="text" id="weight" name="weight" value={this.state.weight} onChange={this.handleChange}/>
        </div>
        <div className="description">
          <p>* Please, provide weight</p>
        </div>
      </>
    );
  }
}
function MainAdd()
{
  const Main = new MainComponent();
  return <>{Main.reveal()}</>;
}

export default MainAdd;