import React from "react";
import "./componentStyles/global.css";
import "./componentStyles/grid.css";

class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      display: "",
    };
  }

  operation(event) {
    switch (event.target.innerHTML) {
      case "+":
        return "addition";

      case "−":
        return "subtraction";

      case "x":
        return "multiplication";

      case "÷":
        return "division";

      case "=":
        // do something important here maybe
        console.log("equals");
        break;

      case "C":
        // Clear the display
        break;

      default:
        throw new Error("You cheeky little ...");
    }
  }

  render() {
    return (
      <>
        <div className="calWrapper">
          <div className="display">
            <input
              className="btn"
              readOnly
              placeholder="0"
              value={this.display}
            />
          </div>
          <div className="btn clearBtn clickAble">C</div>
          <div className="btn percentBtn">%</div>
          <div className="btn divisonBtn clickAble">&#247;</div>
          <div className="btn sevenBtn clickAble">7</div>
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
  }
}

export default Calculator;
