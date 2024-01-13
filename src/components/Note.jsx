import React from "react";

const Note = ({ timecode, text }) => {
  return (
    <li className="note">
      <span className="timecode">{timecode}</span>
      <span className="text">{text}</span>
    </li>
  );
};

export default Note;
