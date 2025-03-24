import React from "react";

const TextArea = ({ value, showError, onChange, placeholder, labelTxt }) => {
  return (
    <div className="p-2">
      <label className="block font-medium">{labelTxt}</label>
      <textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`border p-2 rounded w-full resize-none ${
          showError ? "border-red-500" : "border-gray-300"
        }`}
        rows={4}
      />
      {showError && <p className="text-sm text-red-500 mt-1">Field should not be empty</p>}
    </div>
  );
};

export default TextArea;
