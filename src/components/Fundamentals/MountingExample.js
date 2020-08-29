import React, { useState } from "react";

export default function MountingComponent() {
  const [show, setShow] = useState(false);
  return (
    <main>
      <button onClick={() => setShow((show) => !show)}>Show the text</button>
      {show ? <p>I am the text</p> : null}
    </main>
  );
};

// Better!
// export default function CSSWay() {
//   const [show, setShow] = useState(false);
//   return (
//     <main>
//       <button onClick={() => setShow((show) => !show)}>Show the text</button>
//       <p style={{ display: show ? "none" : "block" }}>I am the text</p>
//     </main>
//   );
// };