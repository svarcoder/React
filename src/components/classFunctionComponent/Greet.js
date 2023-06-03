/**
 * The above code exports a functional component named "Greet" that takes in props and returns a JSX
 * element with a greeting message and any children passed in as props.
 * @param props - props is an object that contains all the properties passed to the Greet component.
 * These properties can be accessed using dot notation, for example, props.name and props.heroName. The
 * children property is a special property that contains any child elements passed to the component.
 * @returns The `Greet` component is being returned, which contains a `div` element with a `h1` element
 * inside that displays a greeting message with the `name` and `heroName` props passed to it. It also
 * renders any child elements passed to it using the `props.children` property.
 */
import React from "react";

const Greet = (props) => {
  return (
    <div>
      <h1>
        Hello {props.name} {props.heroName}
      </h1>
      {props.children}
    </div>
  );
};

export default Greet;
