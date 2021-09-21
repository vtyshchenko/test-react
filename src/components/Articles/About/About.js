import AboutStyle from "./About.modules.css";
import logo from "../../../logo.svg";

function About(props) {
  return (
    <article className={AboutStyle.about}>
      <h2>Призначення сайту:</h2>
      <ul>
        <li>для зосередження інформації для доступу без інтернету</li>
        <li>зручний пошук без інтернету</li>
        <li>зручний для використання та додавання інформації</li>
      </ul>
      <h2>Використані технології:</h2>
      <ul>
        <li>
          <a
            className={AboutStyle.link}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className={AboutStyle.logo} src={logo} alt="logo" />
            React
          </a>
        </li>
        <li>
          <a
            className={AboutStyle.link}
            href="https://nodejs.org/uk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Node.js®
          </a>
        </li>
      </ul>
    </article>
  );
}

export default About;
