import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Front-End Developer</h4>
                <h5>Embryo Software Solutions</h5>
              </div>
              <h3>Jan 2025 – Present</h3>
            </div>
            <p>
              Designed and developed responsive and modern user interfaces using React.js, JavaScript, HTML, and CSS. Integrated REST APIs and handled dynamic data to build scalable and high-performance applications. Improved website performance and user experience through optimization and clean coding practices.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Developer Intern</h4>
                <h5>Embryo Software Solutions</h5>
              </div>
              <h3>Oct 2024 – Dec 2024</h3>
            </div>
            <p>
              Built responsive web pages using HTML, CSS, and JavaScript. Fixed UI bugs and improved existing features in real-world projects. Tested web applications and ensured cross-browser compatibility. Learned team collaboration and agile development practices.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Continuous Learning</h4>
                <h5>React.js & Modern Web Dev</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Actively developing modern web applications with React.js and JavaScript. Specializing in API integration, responsive design, and performance optimization. Building portfolio projects including CMS platforms and healthcare websites.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
