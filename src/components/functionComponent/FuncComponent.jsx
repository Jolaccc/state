import { useState } from "react";

function FuncComponent() {
  const [word, setWord] = useState("");

  function handelInputChange(e) {
    setWord(e.target.value);
  }

  return (
    <>
      <p>Moja najdraza rijec je: {word}</p>
      <input onChange={handelInputChange}></input>
    </>
  );
}

export default FuncComponent;
