import React, { useContext } from 'react';
import NoteForm from '../components/molecules/NoteForm';
import { NoteContext } from '../context/NoteContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import handleAddNoteToBackend from '../service/ServiceApi';

const AddNotePage = () => {

    const { addNote } = useContext(NoteContext);
    const navigate = useNavigate();

    const handleAddNote = ({ name, dob, title, content }) => {

        console.log(name, dob, title, content )
        addNote({ name, dob, title, content })
        navigate("/")
    }
    return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-[600px] p-6  shadow-lg rounded-lg flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-4">Add Note</h1>
        <NoteForm onSubmit={handleAddNote} />
      </div>
    </div>
  );
};

export default AddNotePage;
