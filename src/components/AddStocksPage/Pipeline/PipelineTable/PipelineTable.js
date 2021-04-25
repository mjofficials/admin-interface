import React from "react";
import DynamicInput from "../PipelineInput/PipelineInput";
import DynamicSelect from "../PipelineSelect/PipelineSelect";

const UpdateBtn = ({ btnName }) => {
  return (
    <button type="button" className="btn btn-green d-block mb-3">
      {btnName}
    </button>
  );
};
const DeleteBtn = ({ btnName }) => {
  return (
    <button type="button" className="btn btn-danger d-block mb-3">
      {btnName}
    </button>
  );
};
const PipelineTable = () => {
  let inputLength = 5;
  let inputFields = [];
  let selectFields = [];
  let updateBtn = [];
  let deleteBtn = [];
  for (let i = 0; i < inputLength; i++) {
    inputFields.push(<DynamicInput id={i} key={i} />);
    selectFields.push(<DynamicSelect id={i} key={i} />);
    updateBtn.push(<UpdateBtn btnName="Update" id={i} key={i} />);
    deleteBtn.push(<DeleteBtn btnName="Delete" id={i} key={i} />);
  }
  return (
    <div className="table-responsive">
      <table className="table table-borderless">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Disease</th>
            <th scope="col">Stage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{inputFields}</td>
            <td>{inputFields}</td>
            <td>{selectFields}</td>
            <td>{updateBtn}</td>
            <td>{deleteBtn}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PipelineTable;
