/**
 * The function returns a React component that demonstrates the use of fragments in JSX.
 * @returns The `FragmentDemo` component is returning a fragment that contains an `h1` element with the
 * text "Fragment Demo" and a `p` element with the text "This describes the Fragment Demo component".
 * The fragment is created using the shorthand syntax `<>` and `</>` instead of using the traditional
 * `React.Fragment` syntax.
 */
import React from "react";

function FragmentDemo() {
  return (
    <>
      <h1>Fragment Demo</h1>
      <p>This describes the Fragment Demo component</p>
    </>
  );
}

export default FragmentDemo;
