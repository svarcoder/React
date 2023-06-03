/* The HoverCounterTwo class is a React component that displays the number of times it has been hovered
over. */
import React, { Component } from "react";

class HoverCounterTwo extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return <h2 onMouseOver={incrementCount}>Hovered {count} times</h2>;
  }
}

export default HoverCounterTwo;
