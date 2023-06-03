/**
 * This is a React functional component that renders a button with a click event handler that logs a
 * message to the console when clicked.
 * @returns A functional component named `FunctionClick` is being returned. It contains a button
 * element with an `onClick` event listener that calls the `clickHandler` function when clicked. The
 * `clickHandler` function logs "Button clicked" to the console.
 */
import React from "react";

const FunctionClick = () => {
  function clickHandler() {
    console.log("Button clicked");
  }
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  );
};

export default FunctionClick;
