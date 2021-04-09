import React from "react";
import ColorFulMessage from "./components/ColorFulMessage";

const App = () => {
  const onClickButton = () => {
    alert();
  };
  // const contentStyle = {
  //   color: "blue",
  //   fontSize: "18px"
  // };

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorFulMessage color="pink">元気ですか</ColorFulMessage>
      <ColorFulMessage color="blue">tsuyoppeです</ColorFulMessage>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
