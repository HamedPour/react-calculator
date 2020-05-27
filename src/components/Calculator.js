import React from "react";
import "./componentStyles/global.css";
import "./componentStyles/grid.css";

const Calculator = () => {
  return (
    <>
      <div className="calWrapper">
        <div className="btn display">display</div>
        <div className="btn clearBtn">C</div>
        <div className="btn percentBtn">%</div>
        <div className="btn divisonBtn">&#247;</div>
        <div className="btn sevenBtn">7</div>
        <div className="btn eightBtn">8</div>
        <div className="btn nineBtn">9</div>
        <div className="btn multiplyBtn">X</div>
        <div className="btn fourBtn">4</div>
        <div className="btn fiveBtn">5</div>
        <div className="btn sixBtn">6</div>
        <div className="btn subtractBtn">-</div>
        <div className="btn oneBtn">1</div>
        <div className="btn twoBtn">2</div>
        <div className="btn threeBtn">3</div>
        <div className="btn additionBtn">+</div>
        <div className="btn zeroBtn">0</div>
        <div className="btn dotBtn">.</div>
        <div className="btn equalBtn">=</div>
      </div>
    </>
  );
};

export default Calculator;
