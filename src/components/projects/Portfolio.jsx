import React from 'react';
import Projects from './Projects';
import "./projects.css";

const Portfolio = () => {
  return (
    <section className="portfolio section" id="portfolio">
        <h2 className="section__title">Projects</h2>
        <Projects />
    </section>
  );
}

export default Portfolio;