/**
 * The function exports a table component that renders a single row with columns.
 * @returns The `Table` component is returning a `table` element with a `tbody` element containing a
 * single `tr` element that renders the `Columns` component.
 */
import React from "react";
import Columns from "./Columns";

function Table() {
  return (
    <table>
      <tbody>
        <tr>
          <Columns />
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
