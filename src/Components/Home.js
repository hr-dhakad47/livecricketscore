import React from "react";

import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div style={{ height: "100px" }}>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">ScoreCard</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/Crickinfo">Crickinfo</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/Pointstable">Pointstable</a>
        </li>
       
      </ul>
    </div>
  </div>
</nav>

          {/* <ul class="nav-links">
          
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
