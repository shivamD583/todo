import React, { createContext, useState, useEffect } from "react";
import { getNotes, saveNotes } from "../utils/storage";
import handleAddNoteToBackend from "../service/ServiceApi";
import { toast } from "react-toastify";

export const NoteContext = createContext();

export const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState(getNotes());

  useEffect(() => {
    saveNotes(notes);
  }, [notes]);

  const addNote = async({ name, dob, title, content }) => {

    const newNote = { 
      id: Date.now().toString(), 
      name, 
      dob, 
      title, 
      content 
    };
    const res = await handleAddNoteToBackend(newNote);

    if(res == false){
      return;
    }
    setNotes([...notes, newNote]);
    toast.success("Note added successfully.")
    console.log(newNote)
    
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const updateNote = (id, updatedNote) => {
    setNotes(notes.map((note) => (note.id === id ? { ...note, ...updatedNote } : note)));
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote , updateNote}}>
      {children}
    </NoteContext.Provider>
  );
};
