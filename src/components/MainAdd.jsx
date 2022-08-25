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
    if(formData.get('formSelect') === 'DVD')
    {
      if(formData.get('size') !== '')
      {
        formData.append('description', formData.get('size') + ' (MB)');
      }
      else
      {
        formData.append('description', '');
      }
    }
    else if(formData.get('formSelect') === 'Furniture')
    {
      if(formData.get('height') !== ''  && formData.get('width') !== '' && formData.get('length') !== '')
      {
      formData.append('description', formData.get('height') + 'x' + formData.get('width') + 'x' + formData.get('length') + ' (CM)');
      }
      else
      {
        formData.append('description', '');
      }
    }
    else if(formData.get('formSelect') === 'Book')
    {
      if(formData.get('weight') !== '')
      {
        formData.append('description', formData.get('weight') + ' (KG)');
      }
      else
      {
        formData.append('description', '');
      }
    }
    fetch("http://localhost:8000/api/action/add.php",
    {
      method: "POST",
      body: JSON.stringify(
        {
          sku: formData.get('sku'),
          name: formData.get('name'),
          price: formData.get('price'),
          type: formData.get('formSelect'),
          description: formData.get('description')
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
          <select className="form-select" name="formSelect" value={this.state.formSelect} onChange={this.handleChange}>
            <option disabled>Type Switcher</option>
            <option>DVD</option>
            <option>Furniture</option>
            <option>Book</option>
          </select>
        </div>
        <div className="validMessage">
          <p>{this.state.data[3]}</p>
        </div>
        <DynamicalElement id={this.state.formSelect} data={this.state.data[4]}/>
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
function MainAdd()
{
  const Main = new MainComponent();
  return <>{Main.reveal()}</>;
}

export default MainAdd;