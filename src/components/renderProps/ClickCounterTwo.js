/* This is a React component that displays a button with a count of how many times it has been clicked. */
import React, { Component } from "react";

class ClickCounterTwo extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <button onClick={incrementCount}>
        {this.props.name} Clicked {count} times
      </button>
    );
  }
}

export default ClickCounterTwo;
