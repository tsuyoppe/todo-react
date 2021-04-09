import React from "react";

export const ColorFulMessage = (props) => {
  const { color, children } = props;
  const contentStyle = {
    color,
    fontSize: "18px"
  };
  //  console.log(props);
  return <p style={contentStyle}>{children}</p>;
};
