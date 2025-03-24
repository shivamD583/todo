import React, { useContext, useEffect } from "react";
import { NoteContext } from "../context/NoteContext";
import NoteList from "../components/organism/NoteList";
import Button from "../components/atoms/Button";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const { notes, addNote, deleteNote } = useContext(NoteContext);
    const naviagte = useNavigate();

    const handleAddNote = () => {
        naviagte('/add-note')

    }

    return (
        <div className="max-w-3xl h-screen mx-auto p-4 flex flex-col justify-center items-center">
            {notes.length > 0 ? (
                <>
                    <h1 className="text-2xl font-bold mb-4">Available notes</h1>
                    <NoteList notes={notes} onDelete={deleteNote} />
                    <div className="m-4 p-3">
                        <Button onClick={handleAddNote} children={"Add Note"} className={" cursor-pointer"} />
                    </div>
                </>
            ) : (
                <div className="flex flex-col items-center justify-center h-full">
                    <h3 className="text-xl font-semibold">No notes yet.</h3>
                    <div className="m-4 p-3">
                        <Button onClick={handleAddNote} children={"Add Note"} className={" cursor-pointer"} />
                    </div>
                </div>
            )}


        </div>
    );
};

export default HomePage;
