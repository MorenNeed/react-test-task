import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Add from './pages/productAdd';
import List from './pages/productList';
import './styles/index.css';

class Render extends React.Component
{
  render()
  {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<List/>} />
          <Route path="/add-product" element={<Add/>} />
        </Routes>
      </Router>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Render/>);