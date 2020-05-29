import React from "react";
import "./componentStyles/global.css";
import "./componentStyles/grid.css";

class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      display: "",
      previousNum: 0,
      previousOperation: "",
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
    this.setState({ resetDisplayOnNextClick: true });
    const num1 = parseFloat(this.state.display);
    const num2 = this.state.previousNum;
    let result = 0;
    let previousOperation = this.state.previousOperation;
    switch (anOperation) {
      case "add":
        result = num1 + num2;
        console.log(result);

        this.setState({ previousOperation: "add" });
        break;

      case "subtract":
        console.log("sub in Switch");
        console.log("num1", num1);
        console.log("num2", num2);
        result = this.subtractNumbers(num1, num2);
        this.setState({ previousOperation: "subtract" });
        break;

      case "multiply":
        break;

      case "divide":
        // dont forget divison by zero errors !!!!!!!!!!!!!!!!!
        break;

      case "clear":
        // Clear the display
        this.setState({ display: "" });
        return;

      default:
        break;
    }

    if (anOperation === "equal") {
      if (previousOperation === "add") {
        result = num1 + num2;
      } else if (previousOperation === "subtract") {
        console.log("sub after equal");
        console.log("num1", num1);
        console.log("num2", num2);
        result = this.subtractNumbers(num1, num2);
      }
      this.setState({
        display: result,
        previousNum: 0,
      });
    } else {
      this.setState({ previousNum: result });
    }
  }

  subtractNumbers(A, B) {
    // Zero is such a pain
    if (A === 0 && B === 0) return 0;
    if (A === 0 && B > 0) return -B;
    if (A === 0 && B < 0) return -B;
    if (A > 0 && B === 0) return A;
    if (A < 0 && B === 0) return A;
    // +A, +B
    if (A > 0 && B > 0) {
      if (A > B) return A - Math.abs(B);
      return -Math.abs(A - Math.abs(B));
    }
    // +A, -B
    if (A > 0 && B < 0) return A + Math.abs(B);
    // -A, +B
    if (A < 0 && B > 0) return -(Math.abs(A) + B);
    // -A, -B
    if (A < 0 && B < 0) return -(Math.abs(A) - Math.abs(B));
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
