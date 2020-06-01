import React from "react";
import "./componentStyles/global.css";
import "./componentStyles/grid.css";

class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      display: "",
      carryNumber: null,
      previousOperation: "",
      resetDisplayOnNextClick: false,
    };
  }
  numKeyInput(aNumber) {
    /* 
      Input from number keys go throug this function.
      Input: aNumber - string [0-9 and dot]
      Output: void -> sets state for display and resetDisplayOnNextClick.
      **Sets resetDisplayOnNextClick to false once the display has been clearned
    */
    if (this.state.resetDisplayOnNextClick) {
      this.setState({ display: "", resetDisplayOnNextClick: false }, () => {
        this.setState({ display: this.state.display + aNumber });
      });
    } else {
      this.setState({ display: this.state.display + aNumber });
    }
  }

  operation(anOperation) {
    /* 
      Input from operation keys go through this funciton.
        Also this function is in charge of determining which operation
        is being carried out and executes the neccessary logic.

        Takes arguemts: anOperation - String [add, subtract, divide, multiply,  equal, and clear]
        output: void - Uses Swtich statement to determine which arithmetic operation to preform.
    */
    this.setState({ resetDisplayOnNextClick: true });
    const num1 = this.state.carryNumber;
    const num2 = parseFloat(this.state.display);
    let result = 0;
    let previousOperation = this.state.previousOperation;

    switch (anOperation) {
      case "add":
        result = num1 + num2;
        this.setState({ previousOperation: "add" });
        break;

      case "subtract":
        if (this.state.carryNumber === null) {
          result = num2;
        } else {
          result = num1 - num2;
        }
        this.setState({ previousOperation: "subtract" });
        break;

      case "multiply":
        if (this.state.carryNumber === null) {
          result = num2;
        } else {
          result = num1 * num2;
        }
        this.setState({ previousOperation: "multiply" });
        break;

      case "divide":
        if (this.state.carryNumber === null) {
          result = num2;
        } else {
          result = num1 / num2;
        }
        this.setState({ previousOperation: "divide" });
        break;

      case "clear":
        // Clear the display
        this.setState({ display: "", carryNumber: null });
        return;

      case "equal":
        /**
         * This is fired whenever the user clicks on the equals operator.
         * It checks to see which operation was last used and then preforms
         * the corresponding calculation and once finished sets the state's
         * carryNumber to null to prepare for the next operations
         */
        if (previousOperation === "add") {
          result = num1 + num2;
        } else if (previousOperation === "subtract") {
          result = num1 - num2;
        } else if (previousOperation === "multiply") {
          result = num1 * num2;
        } else if (previousOperation === "divide") {
          result = num1 / num2;
        }
        this.setState({ display: result, carryNumber: null });
        return;

      default:
        break;
    }
    this.setState({
      display: result,
      carryNumber: result,
    });
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
