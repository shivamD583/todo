import React from "react";
import NoteCard from "../molecules/NoteCard";

const NoteList = ({ notes, onDelete }) => {
    console.log(notes)
  return (
    <div className="grid gap-4 w-full">
      {notes.map((note) => (
        <NoteCard key={note?.id} note={note} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default NoteList;
