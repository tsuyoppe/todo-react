import React from "react";
import ReactDom from "react-dom";

const App = () => {
  return (
    <React.Fragment>
      <h1>Hello!</h1>
      <p>World!</p>
    </React.Fragment>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
