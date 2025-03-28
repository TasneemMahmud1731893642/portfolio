import { useState } from "react";
import MatrixIntro from "./matrix";
import me from "./img/me.png";
import bharatiyaImage from "./img/bharatiya.png";
import jt from "./img/jt.png";
import notes from "./img/notes.png";
import learning from "./img/learning.png";
import movie from "./img/movie.png";
import linkedin from "./img/linkedin.png";
import centerIcon from "./img/center-icon.png";
import "./App.css";

// Technology icons (replace with actual paths after downloading)
import cIcon from "./img/c.png";
import cppIcon from "./img/cpp.png";
import javaIcon from "./img/java.png";
import pythonIcon from "./img/python.png";
import htmlIcon from "./img/html.png";
import cssIcon from "./img/css.png";
import jsIcon from "./img/js.png";
import reactIcon from "./img/react.png";
import nodeIcon from "./img/node.png";
import phpIcon from "./img/php.png";
import mongoIcon from "./img/mongo.png";
import postgresIcon from "./img/postgres.png";

function App() {
  const [showPortfolio, setShowPortfolio] = useState(false);

  // Array of technologies with names and icons
  const technologies = [
    { name: "C", icon: cIcon },
    { name: "C++", icon: cppIcon },
    { name: "Java", icon: javaIcon },
    { name: "Python", icon: pythonIcon },
    { name: "-CDHTML", icon: htmlIcon },
    { name: "CSS", icon: cssIcon },
    { name: "JavaScript", icon: jsIcon },
    { name: "ReactJS", icon: reactIcon },
    { name: "NodeJS", icon: nodeIcon },
    { name: "PHP", icon: phpIcon },
    { name: "MongoDB", icon: mongoIcon },
    { name: "PostgreSQL", icon: postgresIcon },
  ];

  return (
    <div className="App">
      {!showPortfolio && <MatrixIntro onComplete={() => setShowPortfolio(true)} />}
      {showPortfolio && (
        <div className="portfolio">
          <header className="App-header section">
            <div className="texts1">
              <h1>Tasneem Mahmud</h1>
              <i>"The best way to predict the future is to create it."</i>
            </div>
            <img src={me} alt="me" />
          </header>

          {/* Tech Stack Animation Section */}
          <div className="tech-stack section">
            <h1>My Tech Stack</h1>
            <div className="tech-orbit-container">
              {/* Center Icon - Stationary */}
              <img src={centerIcon} alt="Center Icon" className="center-icon" />
              {/* Orbiting Tech Items - Spinning */}
              <div className="tech-orbit">
                {technologies.map((tech, index) => (
                  <div
                    key={tech.name}
                    className="tech-item"
                    style={{ animationDelay: `${index * 0.3}s` }}
                  >
                    <img src={tech.icon} alt={tech.name} className="tech-icon" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="about section">
            <div className="texts2">
              <h1>About me</h1>
              <p>
                I am an undergraduate from the esteemed North South University in Bangladesh, where I have gained a solid foundation in computer science and software engineering. With a strong passion for technology and problem-solving, I have developed into a proficient full-stack developer. I specialize in a wide range of programming languages and frameworks, including C, C++, Java, Python, HTML, CSS, JavaScript, ReactJS, NodeJS, PHP, MongoDB, and PostgreSQL. Throughout my academic journey, I have worked on various projects, from building dynamic web applications to optimizing back-end processes, which have honed my skills in both front-end and back-end development. I am particularly enthusiastic about learning new technologies and methodologies, always striving to stay up-to-date with the latest trends in the tech industry. As someone who thrives in collaborative environments, I enjoy solving complex problems and contributing to meaningful projects. Whether it’s building user-centric websites or developing robust server-side applications, my goal is to create efficient, scalable, and user-friendly solutions. I am always open to new challenges and eager to grow both professionally and personally in the world of software development.
              </p>
            </div>
          </div>

          <div className="bharatiya section">
            <div className="texts">
              <h1>Bharatiya</h1>
              <p>
                A smart solution for the expansive rental market, designed to make property searches easier and more efficient. Utilizing Mapbox, this project visualizes listings with markers on an interactive map, categorizing them based on rental prices, which are displayed through colored circles. The platform also includes a built-in messaging system that allows renters to directly connect with property owners. Powered by Google Firebase for backend services and featuring Google’s secure authentication system, the project ensures a reliable and safe user experience, complemented by its own user registration system for added flexibility.
              </p>
            </div>
            <img className="monitor1" src={bharatiyaImage} alt="Bharatiya" />
          </div>

          <div className="notes section">
            <div className="texts">
              <h1>Ecommerce Website</h1>
              <p>
                This full-stack eCommerce website, built for PlinkBd, delivers a seamless shopping experience with a modern and intuitive UI. It includes all essential eCommerce features, such as a product catalog, shopping cart, discount code integration, and a secure checkout process. The platform also features a robust admin panel, enabling efficient order management, product stock control, and discount code management. Developed with React.js for the frontend and Node.js/Express.js for the backend, the application ensures high performance, scalability, and smooth user interaction.
              </p>
            </div>
            <img className="monitor1" src={jt} alt="Ecommerce" />
          </div>

          <div className="notes section">
            <div className="texts">
              <h1>Notes App</h1>
              <p>
                An innovative application designed to help multiple users efficiently store and manage their notes in one unified platform. Each note includes key details such as the title, author’s name, and the content itself, making organization effortless. In addition to shared notes, the application also provides users with a secure space to store personal notes privately. With powerful features like a search function and the ability to sort notes based on various parameters, users can easily find and manage their content. Built using ReactJS, the application is not only comprehensive in its functionality but also concise, ensuring smooth performance and a user-friendly experience.
              </p>
            </div>
            <img className="monitor1" src={notes} alt="Notes" />
          </div>

          <div className="learn section">
            <div className="texts">
              <h1>Learning Platform</h1>
              <p>
                A platform crafted to revolutionize learning by offering all the essential resources needed to master a wide range of topics. Tailored for modern learners, it combines traditional educational tools with the latest advancements in technology. In this age of artificial intelligence, the platform stands out with a seamlessly integrated AI chatbot powered by OpenAI's ChatGPT. This powerful feature provides instant access to personalized assistance, in-depth explanations, and a wealth of information, making learning more interactive and engaging. With its unique ability to deliver unlimited knowledge and resources in one centralized location, this platform is truly a one-of-a-kind solution for learners of all ages and backgrounds.
              </p>
            </div>
            <img className="monitor2" src={learning} alt="Learning" />
          </div>

          <div className="movie section">
            <div className="texts">
              <h1>Movie Theatre</h1>
              <p>
                An indispensable platform for every movie theater: an advanced online ticketing and user management system. This platform enables users to explore movie options, watch trailers, and conveniently purchase tickets for their favorite films. With a robust SQL database, it ensures efficient storage and management of user and ticketing data. The backend, powered by PHP, handles all server-side operations, including secure transactions and user authentication, providing a smooth and reliable experience. This system streamlines theater operations while enhancing the user experience, making it a must-have for modern cinemas.
              </p>
            </div>
            <img className="monitor3" src={movie} alt="Movie" />
          </div>

          <div className="more section">
            <h1>More Projects</h1>
            <p>
              More projects such as an online compiler, food delivery app, Disease Predictor, etc., are in my GitHub repository.
            </p>
            <a
              href="https://github.com/TasneemMahmud1731893642/Projects.git"
              target="_blank"
              rel="noreferrer"
              className="github-link"
            >
              <button className="github-button">
                <img
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                  alt="GitHub Logo"
                  className="github-icon"
                />
                GitHub Repository
              </button>
            </a>
          </div>

          <footer className="footer section">
            <a
              href="https://www.linkedin.com/in/tasneem-mahmud-74bb35158/"
              target="_blank"
              rel="noreferrer"
              className="linkedin-link"
            >
              <button className="linkedin-button">
                <img src={linkedin} alt="LinkedIn Logo" className="linkedin-icon" />
                LinkedIn Profile
              </button>
            </a>
            <a
              href="https://github.com/TasneemMahmud1731893642"
              target="_blank"
              rel="noreferrer"
              className="github-link"
            >
              <button className="github-button">
                <img
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                  alt="GitHub Logo"
                  className="github-icon"
                />
                GitHub Repository
              </button>
            </a>
          </footer>
        </div>
      )}
    </div>
  );
}

export default App;