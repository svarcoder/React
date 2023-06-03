/**
 * The function returns two table columns with the header "Name" and the value "Subham" using React's
 * Fragment component.
 * @returns The `Columns` function is returning a React fragment containing two table cells (`<td>`
 * elements) with the text "Name" and "Subham" respectively.
 */
import React from "react";

function Columns() {
  return (
    <React.Fragment>
      <td>Name</td>
      <td>Subham</td>
    </React.Fragment>
  );
}

export default Columns;
