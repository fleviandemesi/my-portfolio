import React from 'react';
import './About.css'; // Import the CSS file for styling

const About = () => {
  return (
    <div className="about-page">
      <header className="about-header">
        <h1>About Me</h1>
        <p>Welcome to my About page! Here’s a little more about who I am and what I do.</p>
      </header>
      <section className="about-bio">
        <h2>My Journey</h2>
        <p>
          I’m Flevian Demesi, an Agricultural Engineer turned Full Stack Developer. My career began in the field of agriculture, where I developed a keen interest in technology and its applications. Over the years, I transitioned into software development, combining my analytical skills with a passion for coding to solve real-world problems.
        </p>
        <p>
          My transition from engineering to tech has been a journey of continuous learning and growth. I’ve embraced the challenges of coding and software development, leveraging my engineering background to approach problems with a unique perspective.
        </p>
      </section>
      <section className="about-skills">
        <h2>Skills & Expertise</h2>
        <ul>
          <li><strong>Web Development:</strong> Proficient in HTML, CSS, and JavaScript. Experienced in building responsive and interactive web applications.</li>
          <li><strong>Backend Development:</strong> Skilled in Python and JavaScript (Node.js) for server-side programming and API development.</li>
          <li><strong>Android Development:</strong> Experienced in Kotlin and Java for creating user-friendly Android applications.</li>
          <li><strong>Problem-Solving:</strong> Utilizes an engineering mindset to tackle complex problems and deliver innovative solutions.</li>
        </ul>
      </section>
      <section className="about-timeline">
        <h2>Career Timeline</h2>
        <ul>
          <li><strong>2024:</strong> Transitioned to Full Stack Development with a focus on web and Android applications.</li>
          <li><strong>2023 - 2024:</strong> Worked as a Software Developer, contributing to various projects and honing my coding skills.</li>
          <li><strong>2018 - 2022:</strong> Gained experience as an Agricultural Engineer, where I applied technology to optimize agricultural processes.</li>
          <li><strong>2018 - 2023:</strong> Completed my course in Agricultural Engineering, with a focus on technology integration.</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
