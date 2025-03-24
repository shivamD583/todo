import React, { useState, useEffect } from "react";
import Input from "../atoms/Input";
import TextArea from "../atoms/TextArea";
import Button from "../atoms/Button";
import DateInput from "../atoms/DateInput";

const NoteForm = ({ initialData = null, onSubmit }) => {
  const [name, setName] = useState(initialData?.name || "");
  const [dob, setDob] = useState(initialData?.dob || "");
  const [title, setTitle] = useState(initialData?.title || "");
  const [content, setContent] = useState(initialData?.content || "");

  const [errors, setErrors] = useState({ name: false, dob: false, title: false, content: false });

  useEffect(() => {
    if (initialData) {
      setName(initialData.name || "");
      setDob(initialData.dob || "");
      setTitle(initialData.title || "");
      setContent(initialData.content || "");
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate each field separately
    const newErrors = {
      name: !name.trim(),
      dob: !dob.trim(),
      title: !title.trim(),
      content: !content.trim(),
    };

    setErrors(newErrors);

    // Stop submission if any field is empty
    if (Object.values(newErrors).some((error) => error)) return;

    onSubmit({ name, dob, title, content });

    if (!initialData) {
      setName("");
      setDob("");
      setTitle("");
      setContent("");
      setErrors({ name: false, dob: false, title: false, content: false }); 
    }
  };

  const handleOnChange = (setValue , e) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded-lg shadow-md flex flex-col gap-4 w-[400px]">
      <h2 className="text-xl font-semibold">{initialData ? "Edit Note" : "Add Note"}</h2>

      <Input labelTxt="Name:" value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name" showError={errors.name} />
      <DateInput labelTxt="Date of Birth:" value={dob} onChange={(e) => setDob(e.target.value)} placeholder="Select a date" showError={errors.dob} />
      <Input labelTxt="Title:" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Note Title" showError={errors.title} />
      <TextArea labelTxt="Content:" value={content} onChange={(e) => setContent(e.target.value)} placeholder="Write your note..." showError={errors.content} />

      <Button type="submit" className="mt-2">
        {initialData ? "Update Note" : "Add Note"}
      </Button>
    </form>
  );
};

export default NoteForm;
