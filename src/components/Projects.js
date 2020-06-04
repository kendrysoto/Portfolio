import React from 'react';
import '../style/Projects.css';
import DataProjects from '../data/DataProjects';


function Projects() {
  return (
    <div >
      <div>
        {DataProjects.map(Projects => (
          <div className="Projects-container" key={Projects.id}>
            <div>
              <img className="Projects-img" src={Projects.image} />
            </div>
            <div>
              <h2 className="projects-name">{Projects.name}</h2>
              <p className="projects-description">{Projects.description}</p>
            </div>
            <div className="Projects-container-a">
              <a className="Projects-a" href={Projects.demo} target="_blank" ><i class="fas fa-eye"></i>DEMO</a>
              <a className="Projects-a" href={Projects.code} target="_blank" ><i class="fas fa-code"></i>CODE</a>
            </div>
          </div>
        ))}
        <di className="Projects-container2" ></di>
      </div>
    </div>
  )
}

export default Projects;