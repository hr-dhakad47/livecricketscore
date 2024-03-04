import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';

export default function Pointstable() {

  const [pts, setPts] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.cricapi.com/v1/series_points?apikey=4c285cfe-3fbf-4e77-a52b-9705c99d06ac&id=5a28d054-fd19-404a-a1cc-887c18c48d0b")
      .then((res) => {
        console.log(res.data);
        setPts(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
   <>
    <table className="table">
        <thead>
          <tr>
            <th scope="col">TEAM</th>
            <th scope="col">Matches</th>
            <th scope="col">Won</th>
            <th scope="col">Loss</th>
            <th scope="col">NRR</th>
            <th scope="col">Ties</th>

          </tr>
        </thead>
        <tbody>
        {pts.map((ptss, index) => {
          return(
          <tr>
            <th scope="row"><div className="d-flex">
               
                <img className="w-25 h-25"src={ptss.img} alt=""/>
                <div>{ptss.teamname}</div>
            </div></th>
            <td>{ptss.matches}</td>
            <td>{ptss.wins}</td>
            <td>{ptss.loss}</td>
            <td>{ptss.nr}</td>
            <td>{ptss.ties}</td>
          </tr>
          )
        })}
        </tbody>
      </table>
   </>
  );
}

