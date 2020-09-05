import React from "react";
import ReactDOM from "react-dom";

import Navbar from "./Navbar";
import Content from "./Content";
import Content2 from "./Content2";
import Content3 from "./Content3";
import Content4 from "./Content4";
import Warning from "./Warning";

import "./styles.css";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <div>
    <Navbar />
    <Content />
    <Content2 />
    <Content3 />
    <Warning />
    <Content4 />
    <Navbar />
  </div>,
  rootElement
);
