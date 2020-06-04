import React from 'react';
import '../style/About.css';
import { Link } from "react-router-dom";
import Data from '../data/Data';

function About() {
  return (
    <div>
      {Data.map(data => (
        <div className="home-container">
          <div className="home-title" key={data.id}>
            <h1 >{data.name}</h1>
            <p className="home-p">{data.profession} </p>
          </div>
          <div className="home-p2">
            <p >{data.description} </p>
            <div className="home-container-btn">
              <Link className="home-btn" to="/Projects">
                VIEW PROJECTS
              </Link>
            </div>
          </div>
          <div>
            <img className="home-img" src={data.image} />
          </div>
        </div>
      ))}
    </div>
  )
}

export default About;


