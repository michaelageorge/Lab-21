import React from "react";
import "./../design/lib/_variables.scss";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  handleIncrementClick = e => {
    e.preventDefault();
    this.setState({ counter: this.state.counter + 1 });
  };

  handleDecrementClick = e => {
    e.preventDefault();
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div>
        <h4 className={this.state.counter >= 0 ? "positive" : "negative"}>
          {this.state.counter}
        </h4>
        <a className="add" onClick={this.handleIncrementClick}>
          Add!
        </a>
        <a className="subtract" onClick={this.handleDecrementClick}>
          Subtract!
        </a>
      </div>
    );
  }
}

export default Counter;
