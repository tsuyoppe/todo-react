import React from "react";
import ReactDom from "react-dom";

const App = () => {
  return (
    <>
      <h1>Hello!</h1>
      <p>World!</p>
    </>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
