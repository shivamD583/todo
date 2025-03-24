import React from "react";

const Input = ({ value, showError, onChange, placeholder, labelTxt }) => {
  return (
    <div className="p-2">
      <label className="block font-medium">{labelTxt}</label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`border p-2 rounded w-full ${showError ? "border-red-500" : "border-gray-300"}`}
      />
      {showError && <p className="text-sm text-red-500 mt-1">Field should not be empty</p>}
    </div>
  );
};

export default Input;
