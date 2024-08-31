import React from 'react'

import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Hello, I'm Flevian Demesi</h1>
        <img src="/images/coat-of-arms.jpg" alt="Coat of Arms" className="home-image" />
        <p>Welcome to my portfolio!</p>
      </header>
      <section className="home-intro">
        <p>
          I’m an Agricultural Engineer with a passion for technology and development. Over the years, I’ve transitioned from engineering to become a versatile Full Stack Developer. My skill set spans across multiple domains:
        </p>
        <ul>
          <li><strong>Web Development:</strong> I specialize in creating dynamic and responsive websites using HTML and Python.</li>
          <li><strong>Android Development:</strong> Proficient in building robust Android applications with Kotlin and JavaScript.</li>
        </ul>
        <p>
          My background in agricultural engineering has given me a unique perspective on problem-solving and innovation. I enjoy leveraging my technical skills to develop solutions that are both functional and user-friendly.
        </p>
        <p>
          Explore my portfolio to see the projects I’ve worked on and get in touch if you’d like to collaborate or learn more about my work.
        </p>
      </section>
    </div>
  );
};

export default Home;
