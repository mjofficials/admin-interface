import React from "react";
// eslint-disable-next-line no-unused-vars
import ToolTipStyles from "./ToolTipBtn.module.css";

const ToolTipBtn = ({ btnName, changeText, setChangeText, text }) => {
  const deleteHandler = () => {
    // console.log(text);
    setChangeText(changeText.filter((el) => el.id !== text.id));
  };

  return (
    <>
      <button
        onClick={deleteHandler}
        className={`ToolTipStyles btn btn-primary m-1`}
        data-tooltip="Top"
      >
        {btnName}
      </button>
    </>
  );
};

export default ToolTipBtn;
