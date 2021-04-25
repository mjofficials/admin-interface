import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavBtn = styled(Link)`
  width: 8rem;
  margin: 0.2rem;
  text-decoration: none !important;
`;
const NavUl = styled.ul`
  align-items: center;
`;
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Admin Logo
            </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse container navbar-collapse justify-content-end"
            id="navbarNavDropdown"
          >
            <NavUl className="navbar-nav">
              <li className="nav-item">
                <NavBtn to="/addstocks">
                  <button type="button" className="btn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-circle-plus"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path
                        stroke="none"
                        d="M0 0h24v24H0z"
                        fill="none"
                      ></path>
                      <circle cx="12" cy="12" r="9"></circle>
                      <line x1="9" y1="12" x2="15" y2="12"></line>
                      <line x1="12" y1="9" x2="12" y2="15"></line>
                    </svg>
                      Add stock
                    </button>
                </NavBtn>
              </li>
              <li className="nav-item">
                <NavBtn to="/liststocks">
                  <button className="btn Navbar__btn" type="button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-list"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path
                        stroke="none"
                        d="M0 0h24v24H0z"
                        fill="none"
                      ></path>
                      <line x1="9" y1="6" x2="20" y2="6"></line>
                      <line x1="9" y1="12" x2="20" y2="12"></line>
                      <line x1="9" y1="18" x2="20" y2="18"></line>
                      <line x1="5" y1="6" x2="5" y2="6.01"></line>
                      <line x1="5" y1="12" x2="5" y2="12.01"></line>
                      <line x1="5" y1="18" x2="5" y2="18.01"></line>
                    </svg>
                      List Stocks
                    </button>
                </NavBtn>
              </li>
              <li className="nav-item">
                <NavBtn to="/listposts">
                  <button className="btn Navbar__btn" type="button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-list"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path
                        stroke="none"
                        d="M0 0h24v24H0z"
                        fill="none"
                      ></path>
                      <line x1="9" y1="6" x2="20" y2="6"></line>
                      <line x1="9" y1="12" x2="20" y2="12"></line>
                      <line x1="9" y1="18" x2="20" y2="18"></line>
                      <line x1="5" y1="6" x2="5" y2="6.01"></line>
                      <line x1="5" y1="12" x2="5" y2="12.01"></line>
                      <line x1="5" y1="18" x2="5" y2="18.01"></line>
                    </svg>
                      List Posts
                    </button>
                </NavBtn>
              </li>
              <li className="nav-item">
                <NavBtn to="/listusers">
                  <button className="btn Navbar__btn" type="button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-users"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path
                        stroke="none"
                        d="M0 0h24v24H0z"
                        fill="none"
                      ></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      <path d="M21 21v-2a4 4 0 0 0 -3 -3.85"></path>
                    </svg>
                      List Users
                    </button>
                </NavBtn>
              </li>
            </NavUl>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
