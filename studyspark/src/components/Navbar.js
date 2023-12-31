import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import LoginIcon from "@mui/icons-material/Login";
import { getAuth, signOut } from "firebase/auth";

export default function Navbar(props) {
  const currentUser = props.currentUser;
  console.log(currentUser)
  const handleLogout = (event) => {
    signOut(getAuth());
  }

  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <img
            src="/img/studyicon.png"
            alt="The logo of StudySpark"
            className="nav-icon pe-2"
          />
          StudySpark
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navtoggle"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navtoggle">
          <ul className="navbar-nav ms-auto align-items-center">
            {currentUser &&
              <>
                <li className="nav-item mx-2">
                  <NavLink className="nav-link" to="/decks">
                    <span className="px-1">
                      <DashboardCustomizeIcon />
                    </span>
                    Decks
                  </NavLink>
                </li>
                <li className="nav-item mx-2">
                  <span className="nav-link">Logged in as {currentUser.displayName}</span>
                </li>
                <li className="nav-item mx-2">
                  <button className="btn btn-link nav-link" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </>
            } {!currentUser &&
              <>
                <li className="nav-item mx-2">
                  <NavLink className="nav-link" to="/decks">
                    <span className="px-1">
                      <DashboardCustomizeIcon />
                    </span>
                    Decks
                  </NavLink>
                </li>
                <li className="nav-item mx-2">
                  <NavLink className="nav-link" to="/login">
                    <span className="px-1">
                      <LoginIcon />
                    </span>
                    Login / Signup
                  </NavLink>
                </li>
              </>
              }
          </ul>
        </div>
      </div>
    </nav>
  );
}
