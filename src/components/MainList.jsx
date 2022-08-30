import React from "react";
import '../styles/mainList_styles.css';

export default class MainListComponent extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state =
    {
      data: [],
      selectedCheckboxes: [],
      data_delete: [],
      validateDelete: 'inactive'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  validateData(data)
  {
    if(data['message'] === "Product deleted!")
    {
      window.location = '/';
    }
    else
    {
      this.setState(
        {
          data_delete: Array.from(data),
          validateDelete: 'active'
        });
    }
  }
  handleSubmit(event)
  {
    event.preventDefault();
    const checkboxes = document.querySelectorAll('.delete-checkbox');
    checkboxes.forEach(element =>
    {
      if(element.checked)
      {
        this.state.selectedCheckboxes.push(element.id);
      }
    });
    fetch("https://oleksii-roshchupkin-test-task.000webhostapp.com/api/action/delete.php",
    {
      method: "POST",
      body: JSON.stringify(
        {
          sku: Array.from(this.state.selectedCheckboxes)
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
  componentDidMount()
  {
    fetch("https://oleksii-roshchupkin-test-task.000webhostapp.com/api/action/read.php")
      .then((response) =>
      {
        return response.json();
      })
      .then((data) =>
      {
        this.setState({
          data: Array.from(data["records"])
        });
      });
  }
  render()
  {
    return(
      <>
        <hr className="hr"/>
          <main>
            <MainListElements/>
          </main>
        <hr className="hr"/>
      </>
    );
  }
}
class MainListElements extends MainListComponent
{
  render()
  {
    const data = this.state.data;
    return(
      <>
        <div className="validateDelete">
          <div className={this.state.validateDelete}>
            <p>{this.state.data_delete}</p>
          </div>
        </div>
        <form id="delete_form" name="delete_form" onSubmit={this.handleSubmit}>
          <div className="productList-main">
            {data.map(el =>
              <div className="product-element" key={el.sku}>
                <input
                  type="checkbox"
                  className="delete-checkbox"
                  form="delete_form"
                  id={el.sku}
                />
                <ElementInfo sku={el.sku} name={el.name} price={el.price} description={el.description} selected={this.state.selectedCheckboxes}/>
              </div>
              )}
          </div>
        </form>
      </>
    );
  }
}
class ElementInfo extends MainListComponent
{
  render()
  {
    return (
      <div className="element-info">
          <p>{this.props.sku}</p>
          <p>{this.props.name}</p>
          <p>{this.props.price} $</p>
          <p>{this.props.description}</p>
      </div>
    );
  };
}