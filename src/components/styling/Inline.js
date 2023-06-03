/**
 * The Inline function returns a React component that renders a heading with inline styling.
 * @returns The `Inline` component is being returned, which renders a `div` containing an `h1` element
 * with the text "Inline" and the styles defined in the `heading` object applied to it using the
 * `style` prop.
 */
import React from "react";
const heading = {
  fontSize: "72px",
  color: "blue",
};

function Inline() {
  return (
    <div>
      <h1 style={heading}>Inline</h1>
    </div>
  );
}

export default Inline;
