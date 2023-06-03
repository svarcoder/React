/**
 * The function exports a React component that applies a CSS class to a heading element based on a
 * boolean prop.
 * @param props - props is an object that contains all the properties passed to the component. In this
 * specific component, it is used to determine whether the "primary" class should be applied to the
 * heading or not.
 * @returns The `Stylesheet` component is being returned, which renders a `div` containing an `h1`
 * element with a class name that is determined by the `props.primary` value. If `props.primary` is
 * truthy, the class name will be "primary font-xl", otherwise it will just be "font-xl".
 */
import React from "react";
import "./myStyles.css";

function Stylesheet(props) {
  let className = props.primary ? "primary" : "";
  return (
    <div>
      <h1 className={`${className} font-xl`}>Stylesheet</h1>
    </div>
  );
}

export default Stylesheet;
