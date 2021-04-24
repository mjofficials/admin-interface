import React from "react";
import styled from "styled-components";

const StockFormParagraph = styled.p`
  position: absolute;
  top: 25%;
  padding: 0 0.8rem;
`;

const BasicInfo = () => {
  return (
    <div>
      <div className="input-group mb-3">
        <label className="input-group-text" htmlFor="inputGroupSelect01">
          Country
        </label>
        <select className="form-select" id="inputGroupSelect01">
          <option value="">United states</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div className="input-group mb-3">
        <label className="input-group-text" htmlFor="inputGroupSelect01">
          Ticker
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="OCUL"
          aria-label="OCUL"
          aria-describedby="OCUL"
        />
        <button className="btn btn-primary" type="button" id="button-addon1">
          Find
        </button>
      </div>
      <div className="input-group mb-3">
        <label className="input-group-text" htmlFor="inputGroupSelect01">
          Company Name
        </label>
        <div>
          <StockFormParagraph>Ocular Therapeutix</StockFormParagraph>
        </div>
      </div>
      <div className="input-group mb-3">
        <label className="input-group-text" htmlFor="inputGroupSelect01">
          Exchange
        </label>
        <div>
          <StockFormParagraph>XNAS, NASDAQ</StockFormParagraph>
        </div>
      </div>
      <div className="input-group mb-3">
        <label className="input-group-text" htmlFor="inputGroupSelect01">
          Marketcap
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="900000000"
          aria-label="900000000"
          aria-describedby="900000000"
        />
      </div>
      <div className="input-group mb-3">
        <label className="input-group-text" htmlFor="inputGroupSelect01">
          Currency
        </label>
        <select className="form-select" id="inputGroupSelect01">
          <option value="">USD (United states)</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div className="input-group mb-3">
        <label className="input-group-text" htmlFor="inputGroupSelect01">
          Website
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="https://www.oculartherapeutix.com"
          aria-label="https://www.oculartherapeutix.com"
          aria-describedby="https://www.oculartherapeutix.com"
        />
      </div>
      <hr className="dropdown-divider" />
      <div className="input-group my-3">
        <label className="input-group-text" htmlFor="inputGroupSelect01">
          Crop. Twitter
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
          Crop. Linkedin
        </label>
        <input
          type="text"
          className="form-control"
          placeholder=""
          aria-label=""
          aria-describedby=""
        />
      </div>
      <hr className="dropdown-divider" />
    </div>
  );
};

export default BasicInfo;
