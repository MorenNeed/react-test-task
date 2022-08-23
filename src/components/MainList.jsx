import React from "react";
import '../styles/mainList_styles.css';

class MainListComponent extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state =
    {
      data: [],
      selectedCheckboxes: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit()
  {
    console.log(this.state.selectedCheckboxes.length);
    if(this.state.selectedCheckboxes != null)
    {
      this.state.selectedCheckboxes.forEach(element => {
        try
        {
          fetch("http://localhost:8000/api/action/delete.php",
          {
            method: "POST",
            body: JSON.stringify({
              sku: element
            }),
          })
          .then(res => res.json())
          .then((result) => {
            console.log(result.message);
          });
        } catch (err) {
          console.log(err);
        }
      });
    }
    else
    {
      console.log("Select values to delete!");
    }
  }
  handleChange(id)
  {
    const selectedCheckboxes = this.state.selectedCheckboxes;

    const findIdx = selectedCheckboxes.indexOf(id);
    if (findIdx > -1) {
      selectedCheckboxes.splice(findIdx, 1);
    } else {
      selectedCheckboxes.push(id);
    }
     this.setState({
      selectedCheckboxes: selectedCheckboxes
    });
  }
  componentDidMount()
  {
    fetch("http://localhost:8000/api/action/read.php")
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
      <form id="delete_form" name="delete_form" onSubmit={() => this.handleSubmit()}>
        <div className="productList-main">
          {data.map(el =>
            <div className="product-element" key={el.sku}>
              <input
                type="checkbox"
                className="delete-checkbox"
                form="delete_form"
                id={el.sku}
                onChange={() => this.handleChange(el.sku)}
                selected={this.state.selectedCheckboxes.includes(el.sku)}
              />
              <ElementInfo sku={el.sku} name={el.name} price={el.price} description={el.description} selected={this.state.selectedCheckboxes}/>
            </div>
            )}
        </div>
      </form>
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

function MainList()
{
  const MainList = new MainListComponent();
  return <>{MainList.render()}</>;
}

export default MainList;