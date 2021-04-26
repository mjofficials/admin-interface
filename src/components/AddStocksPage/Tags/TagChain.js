import React from "react";
import ToolTipBtn from "../../HelperComponents/ToolTipBtn/ToolTipBtn";
// import TagBtn from "../../HelperComponents/TagBtn";


const btnArr = ['United States', 'Small cap', 'Phase3', 'PFIC', 'Biliary atresia', 'Alagille syndrome', 'Phase3', 'PFIC', 'Biliary atresia', 'Alagille syndrome']
// const btnArr = ['United States']

const TagChain = () => {
  return (
    <div className="" >
      <div className="input-group mb-3">
        <label className="input-group-text" htmlFor="inputGroupSelect01">
          Tag Chain
        </label>
        <select className="form-select" id="inputGroupSelect01">
          <option value="">Onchology</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div className="">
        {btnArr.map((btn, i) => (
          <ToolTipBtn btnName={btn} key={i} />
        ))}
      </div>
    </div>
  );
};

export default TagChain;
