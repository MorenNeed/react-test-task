import React, { useEffect } from "react";
import {
    HeaderAdd,
    Footer,
    MainAdd
  } from "../components";

function Add()
{
  useEffect(() =>
  {
    document.title = "Product Add";
  });
  return (
    <div className="productAdd">
      <HeaderAdd/>
      <MainAdd/>
      <Footer/>
    </div>
  );
}

export default Add;