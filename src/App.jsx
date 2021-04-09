import React, { useEffect, useState } from "react";
import ColorFulMessage from "./components/ColorFulMessage";
/* eslint react-hooks/exhaustive-deps: off */
const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);
  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  //useEffectを用いる numの値が変更された時のみ実行する
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
  }, [num]);

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
