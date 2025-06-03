import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-image">
            <div className="about-image-placeholder">
              About Me
            </div>
          </div>
          <div className="about-text">
            <h2 className="about-title">
              <span>About Me</span>
            </h2>
            <p className="about-paragraph">
              Hello there! I'm a frontend developer with a passion for building intuitive and engaging web experiences, currently expanding my horizons into the exciting world of backend development with Django. My journey into tech wasn't a straight line, but a fascinating exploration that started with a blend of code and creativity. I discovered my knack for bringing ideas to life visually, which naturally led me to bridge the gap between elegant design and robust functionality.
            </p>
            <p className="about-paragraph">
              My technical toolkit is built around creating dynamic and responsive user interfaces with advanced HTML, CSS3 (including Tailwind CSS), and JavaScript, specializing in React.js with over a year of dedicated experience in <code>React.js</code> itself. As I've grown, I've been diving into backend with Python and the Django framework, gaining experience with both SQL and MongoDB databases. This journey has been complemented by a strong foundation in UI/UX design using tools like Figma, Illustrator, and Canva, allowing me to approach development with a holistic understanding of the user experience.
            </p>
            <p className="about-paragraph">
              My path has been shaped by diverse experiences, starting at Boocom Technologies during its startup phase where I honed my versatility across code and no-code platforms and first delved into design for clients. This was followed by a contract at Longhorn Publishers, collaborating on a full-scale elearning platform, an attachment in networking at KEPHIS, and most recently, an enriching period at Discovery Science. At Discovery Science, I've had the incredible opportunity to teach Python programming to young learners and successfully introduce robotics to the organization, alongside leading impactful bootcamps. These experiences have not only sharpened my technical skills but also my ability to manage projects and thrive in both collaborative and independent settings.
            </p>
            <p className="about-paragraph">
              Adaptability and a modern design sensibility are at the core of how I approach my work. I'm constantly seeking to learn and integrate new technologies, including beginning explorations into machine learning. I'm excited about the prospect of leveraging my frontend expertise and growing backend skills to build comprehensive, full-stack applications. I'm always eager to connect with fellow tech enthusiasts and potential collaborators or employers. Let's build something amazing together!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;