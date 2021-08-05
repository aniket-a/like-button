import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [Counter, setlikeCounter] = useState(0);

  function likeClickHandler() {
    var newCounter = Counter + 1;
    setlikeCounter(newCounter);
  }

  return (
    <div className="App">
      <button onClick={likeClickHandler}>like me </button> {Counter}
    </div>
  );
}
