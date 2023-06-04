/**
 * This is a functional component in React that renders a form with a label and an input field that
 * updates its state based on user input.
 * @param props - props is an object that contains all the properties passed to the Form component. It
 * can include any number of properties, including custom properties defined by the user. In this case,
 * the props object is destructured to extract the labelname property and the rest of the properties
 * are spread into the label element.
 * @returns The `Form` component is being returned. It renders a `div` containing a `label` element
 * with a `props.labelname` value and an `input` element with a `value` of `text` and an `onChange`
 * event handler that updates the `text` state with the new input value.
 */
import React, { useState } from "react";

const Form = (props) => {
  const { labelname, ...rest } = props;
  const [text, setText] = useState("");

  return (
    <div>
      <label {...rest}>
        {labelname} :
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </label>
    </div>
  );
};

export default Form;
