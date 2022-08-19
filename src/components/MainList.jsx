import React from "react";
import '../styles/mainList_styles.css';

function ElementInfo()
{
return(
      <div className="element-info">
        <p>JVG200123</p>
        <p>Acme DISK</p>
        <p>1.00$</p>
        <p>Size: 700 MB</p>
      </div>
    );
}
function MainList()
{
  return (
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

export default MainList;