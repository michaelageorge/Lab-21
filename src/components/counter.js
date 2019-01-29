import React from "react";

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
        <h4>{this.state.counter}</h4>
        <a onClick={this.handleIncrementClick}>Click Me to Increment</a>
        <a onClick={this.handleDecrementClick}>Click Me to Decrement</a>
      </div>
    );
  }
}

export default Counter;
