/* This is a React pure component that renders a div with a given name prop and logs a message to the
console when it is rendered. */
import React, { PureComponent } from "react";

class PureComp extends PureComponent {
  render() {
    console.log("Pure Comp render");
    return <div>Pure Component {this.props.name}</div>;
  }
}

export default PureComp;
