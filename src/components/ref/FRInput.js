import React from "react";

// function FRInput() {
//   return (
//     <div>
//       <input type="text"></input>
//     </div>
//   )
// }

const FRInput = React.forwardRef((ref) => {
  return (
    <div>
      <input type="text" ref={ref} />
    </div>
  );
});

export default FRInput;
