import React from "react";

import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div style={{ height: "100px" }}>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="/Scoreboard">
              ScoreCard
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                {/* <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/Scoreboard">ScoreCard</a>
        </li> */}
                <li className="nav-item">
                  <a className="nav-link active" href="/Pointstable">
                    Pointstable
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div style={{ color: "red" }}>
        <Outlet />
      </div>
    </>
  );
};

export default Home;
