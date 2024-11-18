import React, { useState, useLayoutEffect, useRef } from "react";

const UseLayoutEffectExample: React.FC = () => {
  const [width, setWidth] = useState<number>(0);
  const boxRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (boxRef.current) {
      // Measure the width of the box immediately after it is rendered or updated
      const measuredWidth = boxRef.current.offsetWidth;
      setWidth(measuredWidth);
    }
  });

  return (
    <div style={{ padding: "20px" }}>
      <h1>useLayoutEffect Example</h1>
      <div
        ref={boxRef}
        style={{
          backgroundColor: "lightblue",
          padding: "20px",
          width: "50%",
          margin: "auto",
          textAlign: "center",
        }}
      >
        Resize this window!
      </div>
      <p>The measured width of the box is: {width}px</p>
    </div>
  );
};

export default UseLayoutEffectExample;
