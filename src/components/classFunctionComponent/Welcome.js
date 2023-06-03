/* The above class is a React component that renders a welcome message with a name and hero name passed
as props. */
import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return (
      <h1>
        Welcome {this.props.name} {this.props.heroName}
      </h1>
    );
  }
}

export default Welcome;
