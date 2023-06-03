/**
 * The function returns a React component that renders a div with a class name and an h1 element with
 * the text "Subham Char".
 * @returns A functional component named `Hello` is being returned. It renders a `div` element with a
 * class name of `dummyClass` and a `h1` element with the text "Subham Char". This component is
 * exported as the default export of the module.
 */
import React from "react";

const Hello = () => {
  return (
    <div className="dummyClass">
      <h1>Subham Char</h1>
    </div>
  );

  // Without JSX
  //--------------------------
  // return React.createElement(
  //   'div',
  //   {id: 'hello', className: 'dummyClass'},
  //   React.createElement('h1', null, 'Subham Char')
  // )
};

export default Hello;
