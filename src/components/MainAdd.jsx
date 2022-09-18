import React from "react";
import '../styles/mainAdd_styles.css';

export default class MainAddComponent extends React.Component
{
  render()
  {
    return(
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
      productType: 'Type Switcher',
      sku: '',
      name: '',
      price: '',
      size: '',
      height: '',
      width: '',
      length: '',
      weight: '',
      data: []
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
    console.log(data);
    if(data['message'] === "Product created!")
    {
      window.location = '/';
    }
    else
    {
      this.setState(
        {
          data: Array.from(data)
        });
    }
  }
  handleSubmit(event)
  {
    event.preventDefault();
    const formData = new FormData(event.target);
    const DescriptionArray =
    {
      size: formData.get('size'),
      height: formData.get('height'),
      width: formData.get('width'),
      length: formData.get('length'),
      weight: formData.get('weight')
    };
    fetch("https://oleksii-roshchupkin-test-task.000webhostapp.com/api/index.php",
    {
      method: "POST",
      body: JSON.stringify(
        {
          action: 'Add',
          sku: formData.get('sku'),
          name: formData.get('name'),
          price: formData.get('price'),
          type: formData.get('productType'),
          description: DescriptionArray
        })
    })
      .then((response) =>
      {
        return response.json();
      })
      .then((data) =>
      {
        this.validateData(data);
      });
  }
  render()
  {
    return (
      <form id="product_form" name="product_form" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="sku">SKU</label>
          <input type="text" id="sku" name="sku" value={this.state.sku} onChange={this.handleChange}/>
        </div>
        <div className="validMessage">
          <p>{this.state.data[0]}</p>
        </div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={this.state.name} onChange={this.handleChange}/>
        </div>
        <div className="validMessage">
          <p>{this.state.data[1]}</p>
        </div>
        <div className="form-group">
          <label htmlFor="price">Price ($)</label>
          <input type="number" id="price" name="price" value={this.state.price} onChange={this.handleChange}/>
        </div>
        <div className="validMessage">
          <p>{this.state.data[2]}</p>
        </div>
        <div className="form-group">
          <label htmlFor="productType">Type Switcher</label>
          <select className="form-select" name="productType" id="productType" value={this.state.productType} onChange={this.handleChange}>
            <option disabled>Type Switcher</option>
            <option>DVD</option>
            <option>Furniture</option>
            <option>Book</option>
          </select>
        </div>
        <div className="validMessage">
          <p>{this.state.data[3]}</p>
        </div>
        <DynamicalElement id={this.state.productType} data={this.state.data[4]}/>
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
        <Component data={this.props.data}/>
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
          <input form="product_form" type="number" id="size" name="size" value={this.state.size} onChange={this.handleChange}/>
        </div>
        <div className="description">
          <p>* Please, provide size</p>
          <div className="validMessage">
            <p>{this.props.data}</p>
          </div>
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
          <input type="number" id="height" name="height" value={this.state.height} onChange={this.handleChange}/>
        </div>
        <div className="dynamical-form-group">
          <label htmlFor="width">Width (CM)</label>
          <input type="number" id="width" name="width" value={this.state.width} onChange={this.handleChange}/>
        </div>
        <div className="dynamical-form-group">
          <label htmlFor="length">Length (CM)</label>
          <input type="number" id="length" name="length" value={this.state.length} onChange={this.handleChange}/>
        </div>
        <div className="description">
          <p>* Please, provide dimensions in HxWxL format</p>
          <div className="validMessage">
            <p>{this.props.data}</p>
          </div>
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
          <input type="number" id="weight" name="weight" value={this.state.weight} onChange={this.handleChange}/>
        </div>
        <div className="description">
          <p>* Please, provide weight</p>
          <div className="validMessage">
            <p>{this.props.data}</p>
          </div>
        </div>
      </>
    );
  }
}