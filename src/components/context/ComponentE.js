/* The ComponentE class renders the ComponentF component. */
import React, { Component } from "react";
import ComponentF from "./ComponentF";

export class ComponentE extends Component {
  render() {
    return (
      <div>
        <ComponentF />
      </div>
    );
  }
}

export default ComponentE;
