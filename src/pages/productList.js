import React, { useEffect } from "react";
import {
  HeaderList,
  Footer,
  MainList
} from "../components/exports";

function List()
{
  useEffect(() =>
  {
    document.title = "Product List";
  });
  return (
    <div className="productList">
      <HeaderList/>
      <MainList/>
      <Footer/>
    </div>
  );
}
export default List;