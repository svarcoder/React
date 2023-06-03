/**
 * This is a React functional component that uses React.memo to optimize rendering by memoizing the
 * component and only re-rendering it if its props have changed.
 * @returns The component MemoComp wrapped with React.memo.
 */
import React from "react";

function MemoComp({ name }) {
  console.log("Rendering MemoComponent");
  return <div>{name}</div>;
}

export default React.memo(MemoComp);
