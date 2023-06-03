/* This is a regular React component that renders a div with a message and a name prop. */
import React, { Component } from "react";

class RegComp extends Component {
  render() {
    console.log("Regular Comp render");
    return <div>Regular Component {this.props.name}</div>;
  }
}

export default RegComp;
