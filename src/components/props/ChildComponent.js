/**
 * This is a React functional component that renders a button which, when clicked, calls a function
 * passed down as a prop to greet the parent component.
 * @param props - props is an object that contains all the properties passed down from the parent
 * component to the child component. In this specific code snippet, the ChildComponent receives a
 * function called greetHandler as a prop from its parent component.
 * @returns A functional component named `ChildComponent` is being returned. It contains a button
 * element that, when clicked, calls the `greetHandler` function passed down as a prop from the parent
 * component and passes the string "child" as an argument.
 */
import React from "react";

const ChildComponent = (props) => {
  return (
    <div>
      <button onClick={() => props.greetHandler("child")}>Greet Parent</button>
    </div>
  );
};

export default ChildComponent;
