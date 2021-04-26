import React, { useState } from "react";
import ToolTipBtn from "../../HelperComponents/ToolTipBtn/ToolTipBtn";

// const btnArr = ['United States', 'Small cap', 'Phase3', 'PFIC', 'Biliary atresia', 'Alagille syndrome', 'Phase3', 'PFIC', 'Biliary atresia', 'Alagille syndrome']
// const btnArr = ['United States']
// const btnArr = [];

const Tags = () => {
  const [value, setValue] = useState([]);
  const [changeText, setChangeText] = useState([]);

  const handleChange = (e) => {
    setValue(e.target.value);
    // console.log(e.target.value);
  };
  const changeTextHandler = () => {
    setChangeText([...changeText, { value, id: Math.random() * 100 }]);
    setValue("");
  };

  return (
    <div>
      {/* <TagChain userValue={value} /> */}
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
        {changeText.map((text) => (
          <ToolTipBtn
            changeText={changeText}
            setChangeText={setChangeText}
            btnName={text.value}
            key={text.id}
            text={text}
          />
        ))}
      </div>
      <div className="input-group my-3">
        <label className="input-group-text" htmlFor="inputGroupSelect01">
          Add Tag
        </label>
        <input
          type="text"
          className="form-control"
          placeholder=""
          aria-label=""
          aria-describedby=""
          value={value}
          onChange={handleChange}
        />
        <button
          className="btn btn-primary"
          type="button"
          id="button-addon1"
          onClick={changeTextHandler}
        >
          Add Tag
        </button>
      </div>
    </div>
  );
};

export default Tags;
