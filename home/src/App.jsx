import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header"
import Footer from "./Footer";

import "./index.css";

const App = () => (
  <div className="container">
   <Header />
    <div className="my-10">
      Home page Content
    </div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
