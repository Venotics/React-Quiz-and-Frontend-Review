import React from "react";

export function PropsExample(props: { message: string }) {
  return (
    <div>
      <h1
        style={{
          fontSize: "1rem",
          fontWeight: "bold",
          marginBottom: "1rem",
        }}
      >
        The Parent Component said this: {props.message}
      </h1>
    </div>
  );
}

export default PropsExample;
