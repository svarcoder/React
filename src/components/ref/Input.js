/* This is a React component class that creates an input element with a ref that can be used to focus
on the input. */
import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  focusInput() {
    this.inputRef.current.focus();
  }

  render() {
    return <input type="text" ref={this.inputRef}></input>;
  }
}

export default Input;
