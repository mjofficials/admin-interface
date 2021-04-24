import React from "react";

const PipelineTableStageData = () => {
  return (
    <div>
      <table className="table-primary">
        <tbody>
          <tr>
            <td className="input-group mb-1">
              <select className="form-select ms-0 me-3" id="inputGroupSelect01">
                <option value="">Phase 1</option>
                <option value="1">Phase 2</option>
                <option value="2">Phase 3</option>
                <option value="3">Phase 4</option>
              </select>
            </td>
            <td>
              <button
                className="btn btn-green ms-0 me-3"
                type="button"
                id="button-addon1"
              >
                Update
              </button>
            </td>
            <td>
              <button
                className="btn btn-danger"
                type="button"
                id="button-addon1"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PipelineTableStageData;
