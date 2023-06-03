/* The UserGreeting class renders a welcome message based on whether the user is logged in or not,
using different approaches such as if-else, element variables, ternary operator, and short-circuit
operator. */
import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  // #if-else approach
  // render() {
  //   if (this.state.isLoggedIn) {
  //     return <div>Welcome Char</div>
  //   } else {
  //     return <div>Welcome Guest</div>
  //   }
  // }

  // #element-variables approach
  // render() {
  //   let message
  //   if (this.state.isLoggedIn) {
  //     message = <div>Welcome Char</div>
  //   } else {
  //     message = <div>Welcome Guest</div>
  //   }
  //   return <div>{message}</div>
  // }

  // #ternary-operator-approach
  // render() {
  //   return this.state.isLoggedIn ? (
  //     <div>Welcome Char</div>
  //   ) : (
  //     <div>Welcome Guest</div>
  //   )
  // }

  // #short-circuit-operator-approach
  render() {
    return this.state.isLoggedIn && <div>Welcome Char</div>;
  }
}

export default UserGreeting;
