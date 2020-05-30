import React from "react";
import Calculator from "./components/Calculator";
import "./components/componentStyles/topSection.css";

function App() {
  const littleCalculator = process.env.PUBLIC_URL + "/cal.png";
  return (
    <div className="App">
      <div className="topSection">
        <h1>React Calculator</h1>
        <img src={littleCalculator} alt="little calculator iamge" />
      </div>
      <Calculator />
    </div>
  );
}

export default App;
