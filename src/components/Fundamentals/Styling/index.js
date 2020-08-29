import React from "react";
import BaseLayout from "../../Base/BaseLayout";
import "./style.css";

const StylingExample = () => {
  return (
    <BaseLayout>
      <div style={{ color: "red" }}>
        <h1>Hello</h1>
      </div>
    </BaseLayout>
  );
};

export default StylingExample;