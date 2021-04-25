import React from "react";
import PipelineTable from './PipelineTable/PipelineTable'

const Pipeline = () => {
  return (
    <div>
      <div className="input-group mb-3">
        <label className="input-group-text" htmlFor="inputGroupSelect01">
          Product Name
        </label>
        <input
          type="text"
          className="form-control"
          placeholder=""
          aria-label=""
          aria-describedby=""
        />
      </div>
      <div className="input-group mb-3">
        <label className="input-group-text" htmlFor="inputGroupSelect01">
          Disease State
        </label>
        <input
          type="text"
          className="form-control"
          placeholder=""
          aria-label=""
          aria-describedby=""
        />
      </div>
      <div className="input-group mb-3">
        <label className="input-group-text" htmlFor="inputGroupSelect01">
          Stage
        </label>
        <select className="form-select" id="inputGroupSelect01">
          <option value="">Discovery</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <button className="btn btn-primary" type="button" id="button-addon1">
          Add
        </button>
      </div>
      <hr className="dropdown-divider" />
      <PipelineTable />
    </div>
  );
};

export default Pipeline;
