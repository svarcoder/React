/* This is a React component that consumes a username from a user context and displays a greeting
message. */
import React, { Component } from "react";
import { UserConsumer } from "./userContext";

export class ComponentF extends Component {
  render() {
    return (
      <UserConsumer>
        {(username) => {
          return <div>Hello {username}</div>;
        }}
      </UserConsumer>
    );
  }
}

export default ComponentF;
