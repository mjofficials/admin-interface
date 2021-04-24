import React from "react";

const Form = () => {
  return (
    <div className="mb-3">
      <label className="form-label">Text</label>
      <input
        type="text"
        className="form-control"
        name="example-text-input"
        placeholder="Input placeholder"
      ></input>
    </div>
  );
};

export default Form;
