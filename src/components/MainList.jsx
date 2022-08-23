import React from "react";
import '../styles/mainList_styles.css';

class MainListComponent extends React.Component
{
  render()
  {
    return(
      <div>
        <hr className="hr"/>
          <main>
              <div className="productList-main">
                  <div className="product-element">
                      <input type="checkbox" className="delete-checkbox"/>
                      <ElementInfo/>
                  </div>
              </div>
          </main>
        <hr className="hr"/>
      </div>
    );
  }
}
class ElementInfo extends MainListComponent
{
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      DataisLoaded: false
  };
  }

  componentDidMount() {
    fetch("/api/test.php")
      .then((res) => res.json())
      .then((result) =>
      {
        console.log(result);
      })
      .then((json) => {
        this.setState({
        items: json,
        DataisLoaded: true
      });
    })
  }
  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded)
    {
      return(
        <div>
          <h1> Please wait some time.... </h1>
        </div>
        );
    }
    return (
    <div className = "App">
        <h1> Fetch data from an api in react </h1>
        {
          items.map((item) => (
          <ol key = { item.sku } >
            SKU: { item.sku },
            NAME: { item.name },
            PRice: { item.price }
          </ol>
          ))
        }
    </div>
    );
  }
  // render()
  // {
  //   return(
  //   <div className="element-info">
  //     <p>JVG200123</p>
  //     <p>Acme DISK</p>
  //     <p>1.00$</p>
  //     <p>Size: 700 MB</p>
  //   </div>
  //   );
  // };
}

function MainList()
{
  const MainList = new MainListComponent();
  return <>{MainList.render()}</>;
}

export default MainList;