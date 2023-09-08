import React from "react";
import ReactDOM from "react-dom";
import Header from "home/Header";
import Footer from "home/Footer";
import "./index.css";

const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    <Header />
    <div class="text-center">
      
      
      <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1fae1/512.gif" alt="🫡" width="320" height="320"/>

      <h5 class="text-xl font-medium leading-tight mb-2">Salute</h5>
      <p class="text-gray-500">This is how you salute</p>
    </div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
