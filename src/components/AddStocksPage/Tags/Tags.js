import React from "react";
import TagChain from "./TagChain";

const Tags = () => {
  return (
    <div>
      <TagChain />
      <div className="input-group mb-3">
        <label className="input-group-text" htmlFor="inputGroupSelect01">
          Add Tag
        </label>
        <input
          type="text"
          className="form-control"
          placeholder=""
          aria-label=""
          aria-describedby=""
        />
        <button className="btn btn-primary" type="button" id="button-addon1">
          Add Tag
        </button>
      </div>
    </div>
  );
};

export default Tags;
