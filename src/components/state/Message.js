/* The Message class is a React component that displays a message and allows the user to change it by
clicking a button. */
import React, { Component } from "react";

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: props.message,
    };
  }

  changeMessage() {
    this.setState({
      message: "Thank you for subscribing!",
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    );
  }
}

export default Message;
