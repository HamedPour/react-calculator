import React from "react";
import "./componentStyles/global.css";
import "./componentStyles/grid.css";

class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      display: "",
      errFlag: false,
      num1: 0,
      num2: 0,
    };
  }

  decimalError() {
    this.setState({ display: "Err" }, () => {
      this.setState({ errFlag: true });
    });
  }

  castDisplayToFloat() {
    if (this.state.display.split(".").length > 2) {
      this.decimalError();
    }
    return parseFloat(this.state.display);
  }

  numKeyInput(aNumber) {
    if (this.state.errFlag) {
      this.setState({
        display: "",
        errFlag: false,
      });
    } else {
      this.setState({ ...this.state, display: this.state.display + aNumber });
    }
  }

  operation(anOperation) {
    let number1 = this.castDisplayToFloat();
    let number2 = parseFloat(this.state.num2);
    let result = 0;
    switch (anOperation) {
      case "add":
        console.log(number1, number2, result);
        result = number1 + number2;
        this.setState({
          display: result,
          num2: result,
        });
        break;

      case "subtract":
        console.log(anOperation);
        return "subtraction";

      case "multiply":
        console.log(anOperation);
        return "multiplication";

      case "divide":
        console.log(anOperation);
        return "division";

      case "equal":
        // do something important here maybe
        this.setState({ display: result, num2: result });
        break;

      case "clear":
        // Clear the display
        this.setState({ display: "" });
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
              value={this.state.display}
            />
          </div>
          <div
            className="btn clearBtn clickAble"
            onClick={() => {
              this.operation("clear");
            }}
          >
            C
          </div>
          <div className="btn percentBtn">%</div>
          <div
            className="btn divisonBtn clickAble"
            onClick={() => this.operation("divide")}
          >
            &#247;
          </div>
          <div
            className="btn sevenBtn clickAble"
            onClick={() => this.numKeyInput("7")}
          >
            7
          </div>
          <div
            className="btn eightBtn clickAble"
            onClick={() => this.numKeyInput("8")}
          >
            8
          </div>
          <div
            className="btn nineBtn clickAble"
            onClick={() => this.numKeyInput("9")}
          >
            9
          </div>
          <div
            className="btn multiplyBtn clickAble"
            onClick={() => {
              this.operation("multiply");
            }}
          >
            x
          </div>
          <div
            className="btn fourBtn clickAble"
            onClick={() => this.numKeyInput("4")}
          >
            4
          </div>
          <div
            className="btn fiveBtn clickAble"
            onClick={() => this.numKeyInput("5")}
          >
            5
          </div>
          <div
            className="btn sixBtn clickAble"
            onClick={() => this.numKeyInput("6")}
          >
            6
          </div>
          <div
            className="btn subtractBtn clickAble"
            onClick={() => {
              this.operation("subtract");
            }}
          >
            &#8722;
          </div>
          <div
            className="btn oneBtn clickAble"
            onClick={() => this.numKeyInput("1")}
          >
            1
          </div>
          <div
            className="btn twoBtn clickAble"
            onClick={() => this.numKeyInput("2")}
          >
            2
          </div>
          <div
            className="btn threeBtn clickAble"
            onClick={() => this.numKeyInput("3")}
          >
            3
          </div>
          <div
            className="btn additionBtn clickAble"
            onClick={() => {
              this.operation("add");
            }}
          >
            +
          </div>
          <div
            className="btn zeroBtn clickAble"
            onClick={() => this.numKeyInput("0")}
          >
            0
          </div>
          <div
            className="btn dotBtn clickAble"
            onClick={() => this.numKeyInput(".")}
          >
            .
          </div>
          <div
            className="btn equalBtn clickAble"
            onClick={() => {
              this.operation("equal");
            }}
          >
            =
          </div>
        </div>
      </>
    );
  }
}

export default Calculator;
