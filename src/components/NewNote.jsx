import React, { useState, useEffect } from "react";

import { displayTime } from "../utilities/displayTime";

const NewNote = ({ runningTime, setNotes }) => {
  const [isActive, setIsActive] = useState(false);
  const [timecode, setTimecode] = useState(runningTime);

  useEffect(() => {
    if (isActive) {
      return;
    }

    setTimecode(runningTime);
  }, [runningTime, isActive]);

  const saveNote = (event) => {
    event.preventDefault();

    const timecodeInput = event.target.timecode;
    const textInput = event.target.text;

    setNotes((notes) => [
      ...notes,
      {
        timecode: timecodeInput.value,
        text: textInput.value,
      },
    ]);

    textInput.value = "";

    setIsActive(false);
  };

  const handleChange = (event) => {
    setIsActive(event.target.value != "");
  };

  return (
    <li class="new-note">
      <form onSubmit={saveNote}>
        <input
          className={isActive ? "active" : ""}
          disabled
          name="timecode"
          value={displayTime(timecode)}
        />
        <input name="text" onChange={handleChange} />
        <input type="submit" value="Add note" disabled={!isActive} />
      </form>
    </li>
  );
};

export default NewNote;
