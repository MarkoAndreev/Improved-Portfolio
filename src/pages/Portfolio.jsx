import React from 'react';
import Project from '../components/Project';

const projects = [
  {
    title: 'Dont Rain On Me',
    description: 'The whole premise for our project is to make it easier for users to be able to see if the weather on that particular date of events that they may potentially want to go',
    technologies: 'Tailwind CSS, CSS, Javascript/JQuery, HTML, Ticketmaster API, Tomorrow (Forecast) API, Bing Maps API and VS Code.',
    imageUrl: 'https://github.com/GDonna/dont-rain-me-out/blob/main/assets/Images/127.0.0.1_5500_index.html%20(2).png',
    projectUrl: 'https://github.com/GDonna/dont-rain-me-out',
  },
  {
    title: 'Fosters Pets Social Application',
    description: "It's an app made to help new foster parents connect with veterans of their field by looking at posts of peoples situations and their solutions to certain problems, sort of like Instagram for pet parents!",
    technologies: 'node.js, express.js, MySql, sequelize, dotenv, insomnia, bootstrap, heroku, HTML, JS, CSS',
    imageUrl: '',
    projectUrl: 'https://github.com/thoughtsinbuttermilk/npmonsters',
  },
  {
    title: 'Hobby House',
    description: 'An app build to connect people who love Hobbies, weather they are just starting out or have been doing it for a while they can connect and share their experiances to the world!',
    technologies: 'React.js, node.js, mongo, HTML, JS, CSS, GraphQL',
    imageUrl: '',
    projectUrl: 'https://github.com/MarkoAndreev/groupFor',
  },
];

const Portfolio = () => {
  return (
    <section className="portfolio-container">
      <h2 className="project-h2">Portfolio</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  )
};
export default Portfolio;