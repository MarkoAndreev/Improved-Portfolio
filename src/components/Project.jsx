import React from 'react'

const Project = ({ title, description, technologies, imageUrl, projectUrl}) => {
    return (
        <div className="project-container">
          <h3 className="title-container">{title}</h3>
          <p className="description-container">{description}</p>
          <p className="tech-container">Technologies: {technologies}</p>
          <img src={imageUrl} alt={title} className="img-container" />
          {projectUrl && (
            <a
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-container"
            >
              View Project
            </a>
          )}
        </div>
      );
}

export default Project;