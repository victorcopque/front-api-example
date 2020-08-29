import React, { useRef, useEffect } from "react";

export default function UseRefExample() {
  const buttonTest = useRef(null);

  useEffect(() => {
    console.log(buttonTest.current.innerHTML);
  }, []);

  return <button ref={buttonTest}>A button that works 2!</button>;
}