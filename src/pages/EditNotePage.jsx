import React, { useContext, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { NoteContext } from "../context/NoteContext";
import NoteForm from "../components/molecules/NoteForm";
import { toast } from "react-toastify";

const EditNotePage = () => {
  const { id } = useParams();
  const { notes, updateNote } = useContext(NoteContext);
  const navigate = useNavigate();
  
  const [noteData, setNoteData] = useState({ name: "", dob: "", title: "", content: "" });

  useEffect(() => {
    const noteToEdit = notes.find((note) => note.id === id);
    if (noteToEdit) {
      setNoteData(noteToEdit);
    }
  }, [id, notes]);

  const handleUpdate = (updatedData) => {
    updateNote(id, updatedData);
    toast.success("Note updated successfully")
    navigate("/");
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-[600px] p-6  shadow-lg rounded-lg flex flex-col items-center">
      <h1>Edit Note</h1>
      <NoteForm initialData={noteData} onSubmit={handleUpdate} />
      </div>
    </div>
  )
};

export default EditNotePage;
