import React from "react";
import ReactDOM from "react-dom";

import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import Content2 from "./Content2";
import Content3 from "./Content3";
import Content4 from "./Content4";

import "./styles.css";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <div>
    <Header />
    <Content />
    <Content2 />
    <Content3 />
    <Content4 />
    <Footer />
  </div>,
  rootElement
);
