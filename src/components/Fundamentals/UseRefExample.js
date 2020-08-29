import React, { useRef, useEffect } from "react";

export default function UseRefExample() {
  const buttonTest = useRef(null);

  useEffect(() => {
    console.log(buttonTest.current);
  }, []);

  return <button ref={buttonTest}>A button that works!</button>;
}