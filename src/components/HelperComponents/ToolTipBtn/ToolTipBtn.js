import React from "react";
// eslint-disable-next-line no-unused-vars
import ToolTipStyles from "./ToolTipBtn.module.css";

const ToolTipBtn = ({ btnName }) => {
  return (
    <>
      <button className={`ToolTipStyles btn btn-primary m-1`} data-tooltip="Top">
        {btnName}
      </button>
    </>
  );
};

export default ToolTipBtn;
