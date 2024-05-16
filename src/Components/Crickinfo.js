import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [cricks, setCrick] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://api.cricapi.com/v1/currentMatches?apikey=4c285cfe-3fbf-4e77-a52b-9705c99d06ac&offset=0");
        setCrick(res.data.data);
        console.log(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h5 className="text-center mb-5">Watch Live Score</h5>
      <div className="d-flex flex-wrap gap-2 justify-content-evenly">
        {cricks.map((crick, index) => (
          <div key={index} className="card w-25 h-25 bg-dark-subtle">
            <div className="ms-1 me-1">
              <h6 className="card w-100 text-center bg-primary-subtle">{crick.matchType}</h6>
              <div className="d-flex justify-content-evenly">
                {crick.teamInfo[0] && (
                  <div className="card">
                    <img
                      src={crick.teamInfo[0].img}
                      className="figure-img rounded"
                      style={{ height: "50px", width: "50px", fontSize: "12px" }}
                      alt="Image"
                    />
                    <div className="fs-6 mt-1">{crick.teamInfo[0].name}</div>
                    {crick.score[0] ? (
                      <div className="text-center">
                        <span className="fs-6 mt-1">{crick.score[0].o}</span>
                        <span className="fs-6 mt-1"> {crick.score[0].r}/{crick.score[0].w}</span>
                        <p><span className="ms-2">{crick.score[0].inning}</span></p>
                      </div>
                    ) : (
                      <div className="d-flex gap-3 justify-content-end">
                        <span className="fs-6 mt-1"> </span>
                        <span className="fs-6 mt-1"> </span>
                      </div>
                    )}
                  </div>
                )}
                {crick.teamInfo[1] && (
                  <div className="card">
                    <img
                      src={crick.teamInfo[1].img}
                      className="figure-img rounded"
                      style={{ height: "50px", width: "50px", fontSize: "12px" }}
                      alt="Image"
                    />
                    <div className="fs-6 mt-1">{crick.teamInfo[1].name}</div>
                    {crick.score[1] ? (
                      <div className="text-center">
                        <span className="fs-6 mt-1">{crick.score[1].o}</span>
                        <span className="fs-6 mt-1"> {crick.score[1].r}/{crick.score[1].w}</span>
                        <p><span className="ms-2">{crick.score[1].inning}</span></p>
                      </div>
                    ) : (
                      <div className="d-flex gap-3 justify-content-end">
                        <span className="fs-6 mt-1"> </span>
                        <span className="fs-6 mt-1"> </span>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className="card-body">
                <div className="card w-5 h-5 row">
                  <span className="col text-danger text-center">{crick.status}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
