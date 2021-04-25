import React from "react";
import ListUsersTableData from "../../../Data/ListUsersTableData.json";
import Pagination from "../../HelperComponents/Pagination/Pagination";
import DeleteBtnModal from "../../ListPosts/DeleteBtnModal/DeleteBtnModal";
import UserStateBtnModal from "../UserStateBtnModal/UserStateBtnModal";

const ListUsersTable = () => {
  let delBtnArr = [];
  let stateBtnArr = [];

  for (let i = 0; i < 1; i++) {
    delBtnArr.push(<DeleteBtnModal btnName="Del" key={i} />);
  }

  for (let i = 0; i < 1; i++) {
    stateBtnArr.push(<UserStateBtnModal btnName="Inactive" key={i} />);
  }

  return (
    <>
      <h1>ListUsersTable</h1>
      <div className="table-responsive">
        <table className="table table-borderless">
          <thead>
            <tr>
              <th scope="col">Email address</th>
              <th scope="col">Username</th>
              <th scope="col">Posts</th>
              <th scope="col">Posts(1M)</th>
              <th scope="col">Logins</th>
              <th scope="col">Member since</th>
              <th scope="col">Last Active</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody className="pb-5">
            {ListUsersTableData.listuserstabledata.map((tdata, i) => (
              <tr key={i}>
                <td>{tdata.email_address}</td>
                <td>{tdata.username}</td>
                <td>{tdata.posts}</td>
                <td>{tdata["posts(1M)"]}</td>
                <td>{tdata.logins}</td>
                <td>{tdata.member_since}</td>
                <td>{tdata.last_active}</td>
                <td>{delBtnArr}</td>
                <td>{stateBtnArr}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination />
    </>
  );
};

export default ListUsersTable;
