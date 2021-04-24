import React from "react";

const TagBtn = () => {
  return (
    <>
      <button
        type="button"
        className="btn"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title="Tooltip on top"
      >
        United States
      </button>
      <button
        type="button"
        className="btn btn-secondary"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title="Tooltip on top"
      >
        Tooltip on top
      </button>
    </>
  );
};

export default TagBtn;
