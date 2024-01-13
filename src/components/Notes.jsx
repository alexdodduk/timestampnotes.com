import React, { useState } from "react";
import NewNote from "./NewNote";
import Note from "./Note";

const Notes = ({ runningTime }) => {
  const [notes, setNotes] = useState([]);

  return (
    <ol className="notes">
      {notes.map(({ timecode, text }) => {
        return <Note key={timecode} timecode={timecode} text={text} />;
      })}
      <NewNote runningTime={runningTime} setNotes={setNotes} />
    </ol>
  );
};

export default Notes;
