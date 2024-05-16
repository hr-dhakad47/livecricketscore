import React from "react";

import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div style={{ height: "100px" }}>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">ScoreCard</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/Crickinfo">Crickinfo</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/Pointstable">Pointstable</a>
        </li>
       
      </ul>
    </div>
  </div>
</nav>

          {/* <ul className="nav-links">
          
            <li>
              <Link to="/Crickinfo">Crickinfo</Link>
            </li>
            <li>
              <Link to="/Pointstable">Pointstable</Link>
            </li>
        
          </ul> */}

      </div>
      <div style={{ color: "red" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
