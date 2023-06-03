/* The EventBind class is a React component that demonstrates different ways of binding event handlers
in React. */
import React, { Component } from "react";

class EventBind extends Component {
  constructor() {
    super();
    this.state = {
      message: "Hello",
    };
    // this.clickHandler = this.clickHandler.bind(this);
  }

  // clickHandler() {
  //   console.log(this);
  //   this.setState({ message: "Goodbye" });
  // }

  clickHandler = () => {
    this.setState({ message: "Goodbye" });
  };

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clickHandler.bind(this)}>Click</button>
        <button onClick={() => this.clickHandler()}>Click</button>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default EventBind;
