import React from "react";
import "./componentStyles/global.css";
import "./componentStyles/grid.css";

class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      display: "",
      previousNum: 0,
      previousOperation: "add",
      resetDisplayOnNextClick: false,
    };
  }
  numKeyInput(aNumber) {
    if (this.state.resetDisplayOnNextClick) {
      this.setState({ display: "", resetDisplayOnNextClick: false }, () => {
        this.setState({ display: this.state.display + aNumber });
      });
    } else {
      this.setState({ display: this.state.display + aNumber });
    }
  }

  operation(anOperation) {
    //Capture the current number on display ans save it in num1
    const num1 = parseFloat(this.state.display);
    const num2 = this.state.previousNum;
    let result = 0;
    let previousOperation = this.state.previousOperation;
    switch (anOperation) {
      case "add":
        this.setState({ resetDisplayOnNextClick: true });
        result = num1 + num2;
        previousOperation = "add";
        break;

      case "subtract":
        break;

      case "multiply":
        break;

      case "divide":
        break;

      case "clear":
        // Clear the display
        this.setState({ display: "" });
        return;

      default:
        break;
    }

    console.log("anOperation", anOperation);
    console.log("prevousOperation", previousOperation);

    if (anOperation === "equal") {
      if (previousOperation === "add") {
        result = num1 + num2;
        this.setState(
          { display: result, previousNum: 0, resetDisplayOnNextClick: true },
          () => {
            console.log("HERE");
            return;
          }
        );
      }
    } else {
      this.setState({ previousNum: result });
    }

    // EVERYTHING HAPPENS HERE
    // console.log("num1", num1);
    // console.log("num2", num2);
    // console.log("result", result);
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
