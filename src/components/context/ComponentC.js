import React, { Component } from "react";
import ComponentE from "./ComponentE";
import { UserProvider } from "./userContext";

export class ComponentC extends Component {
  render() {
    return (
      <UserProvider value="Subham Char">
        <ComponentE />
      </UserProvider>
    );
  }
}

export default ComponentC;
