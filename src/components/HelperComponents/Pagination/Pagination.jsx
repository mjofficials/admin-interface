import React from "react";

const url = "";
const Pagination = () => {
  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <a
              className="page-link"
              href={url}
              tabIndex="-1"
              aria-disabled="true"
            >
              Previous
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href={url}>
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href={url}>
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href={url}>
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href={url}>
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
