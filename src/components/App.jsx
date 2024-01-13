import { useState } from "react";

import "../stylesheets/app.css";

import Timer from "./Timer";
import Notes from "./Notes";

const App = () => {
  const [runningTime, setRunningTime] = useState(0);

  return (
    <div className="App">
      <Timer runningTime={runningTime} setRunningTime={setRunningTime} />
      <Notes runningTime={runningTime} />
    </div>
  );
};

export default App;
