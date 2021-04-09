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

  if (num % 3 === 0) {
    faceShowFlag || setFaceShowFlag(true);
  } else {
    faceShowFlag && setFaceShowFlag(false);
  }

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorFulMessage color="pink">元気ですか</ColorFulMessage>
      <ColorFulMessage color="blue">tsuyoppeです</ColorFulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>顔文字on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>( ﾟДﾟ)( ﾟдﾟ)ﾊｯ!</p>}
    </>
  );
};

export default App;
