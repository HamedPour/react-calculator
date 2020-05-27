import React, { useState, useEffect } from "react";
import "./componentStyles/global.css";
import "./componentStyles/grid.css";

const Calculator = () => {
  const [display, setDisplay] = useState("0");

  // Need a function "updateDisplay" that adds all the digits
  // into display when the number keys are pressed

  // Need a function to deal with operations - something that records
  // the state of display when an operation key is pressed and then uses
  // that operation to perform calculations on the second display state which
  // is added afterwards.

  return (
    <>
      <div className="calWrapper">
        <div className="btn display">{display}</div>
        <div className="btn clearBtn clickAble">C</div>
        <div className="btn percentBtn">%</div>
        <div className="btn divisonBtn clickAble">&#247;</div>
        <div
          className="btn sevenBtn clickAble"
          onClick={() => {
            setDisplay(display + "7");
          }}
        >
          7
        </div>
        <div className="btn eightBtn clickAble">8</div>
        <div className="btn nineBtn clickAble">9</div>
        <div className="btn multiplyBtn clickAble">x</div>
        <div className="btn fourBtn clickAble">4</div>
        <div className="btn fiveBtn clickAble">5</div>
        <div className="btn sixBtn clickAble">6</div>
        <div className="btn subtractBtn clickAble">&#8722;</div>
        <div className="btn oneBtn clickAble">1</div>
        <div className="btn twoBtn clickAble">2</div>
        <div className="btn threeBtn clickAble">3</div>
        <div className="btn additionBtn clickAble">+</div>
        <div className="btn zeroBtn clickAble">0</div>
        <div className="btn dotBtn clickAble">.</div>
        <div className="btn equalBtn clickAble">=</div>
      </div>
    </>
  );
};

export default Calculator;
