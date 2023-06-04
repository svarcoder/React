/* This code is demonstrating the use of React's `Suspense` component and `lazy` function for code
splitting and lazy loading of components. */
import React, { Suspense } from "react";

const Hello = React.lazy(() => import("./Hello"));

const SuspenseExample = () => {
  return (
    <div>
      <h1>My App</h1>
      <Suspense fallback={<>Loading...</>}>
        <Hello />
      </Suspense>
    </div>
  );
};

export default SuspenseExample;
