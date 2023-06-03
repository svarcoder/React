/* This code is defining a React functional component called `FRInput` that uses the `forwardRef`
method to forward a `ref` to the `input` element inside the component. This allows the parent
component to access and manipulate the `input` element's properties and methods. The component is
then exported as the default export of the module. */
import React from "react";

const FRInput = React.forwardRef((ref) => {
  return (
    <div>
      <input type="text" ref={ref} />
    </div>
  );
});

export default FRInput;
