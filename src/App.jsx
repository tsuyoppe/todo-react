import React, { useState } from "react";
import ColorFulMessage from "./components/ColorFulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);
  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorFulMessage color="pink">元気ですか</ColorFulMessage>
      <ColorFulMessage color="blue">tsuyoppeです</ColorFulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>顔文字on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>( ｀ー´)ノ</p>}
    </>
  );
};

export default App;
