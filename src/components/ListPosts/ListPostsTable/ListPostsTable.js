import React from "react";
import ListPostTableData from "../../../Data/ListPostTableData.json";
import Pagination from "../../HelperComponents/Pagination/Pagination";
import DeleteBtnModal from "../DeleteBtnModal/DeleteBtnModal";
import ViewBtnModal from "../ViewBtnModal/ViewBtnModal";

const viewKeyword = ["View"];
const deleteKeyword = ["Delete"];
const LikeBtn = () => {
  return (
    <button type="button" className="btn btn-secondary">
      +1Like
    </button>
  );
};

const ListPostsTable = () => {
  let viewBtnModal = [];
  let deleteBtnModal = [];
  for (let i = 0; i < 1; i++) {
    viewBtnModal.push(
      <ViewBtnModal btnName={viewKeyword.map((btn) => btn)} key={i} />
    );
  }
  for (let i = 0; i < 1; i++) {
    deleteBtnModal.push(
      <DeleteBtnModal btnName={deleteKeyword.map((btn) => btn)} key={i} />
    );
  }
  return (
    <>
      <div className="table-responsive">
        <table className="table table-borderless">
          <thead>
            <tr>
              <th scope="col">Ticker</th>
              <th scope="col">Author</th>
              <th scope="col">Time</th>
              <th scope="col">Part of thread</th>
              <th scope="col">Likes</th>
              <th scope="col">Flags</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody className="pb-5">
            {ListPostTableData.listposttabledata.map((tdata, i) => (
              <tr key={i}>
                <td>{tdata.ticker}</td>
                <td>{tdata.author}</td>
                <td>{tdata.time}</td>
                <td>{tdata.partofthread}</td>
                <td>{tdata.likes}</td>
                <td>{tdata.flags}</td>
                <td>{viewBtnModal}</td>
                <td>{<LikeBtn />}</td>
                <td>{deleteBtnModal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination />
    </>
  );
};

export default ListPostsTable;
