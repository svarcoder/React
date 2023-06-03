/* The above class is a ClickCounter component that uses a higher-order component (withCounter) to
increment a count and display the number of times the button has been clicked. */
import React, { Component } from "react";
import withCounter from "./withCounter";

class ClickCounter extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <button onClick={incrementCount}>
        {this.props.name} Clicked {count} times
      </button>
    );
  }
}

export default withCounter(ClickCounter, 5);
