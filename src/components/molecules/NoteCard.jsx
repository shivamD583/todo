import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const NoteCard = ({ note, onDelete }) => {
  const navigate = useNavigate();

  const handleDelete = (updatedData) => {
    onDelete(note.id)
    toast.success("Note deleted successfully")
  }

  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <h2 className="text-lg text-gray-600 "><strong>Title:</strong> {note.title}</h2>
      <p className="text-gray-600"><strong>Name:</strong> {note.name}</p>
      <p className="text-gray-600"><strong>DOB:</strong> {note.dob}</p>
      <p className="mt-2 text-gray-600"> <strong>Content:</strong> {note.content}</p>

      <div className="flex gap-2 mt-3">
        <button 
          onClick={() => navigate(`/edit-note/${note.id}`)} 
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
        >
          Edit
        </button>
        <button 
          onClick={handleDelete} 
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default NoteCard;
