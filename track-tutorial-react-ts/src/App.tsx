import React, { useState } from 'react';
import { TrackButton } from "./components/TrackButton";
import { TrackText } from "./components/TrackText";

function App() {
  const [text, setText] = useState<string>("");
  const onClick = () => {
    setText("hello track");
  }

  return (
    <div style={{
      textAlign: "center",
    }}>
      <TrackButton onClick={onClick} />
      <TrackText text={text}/>
    </div>
  );
}

export default App;
