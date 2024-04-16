import React, { useContext } from "react";

import styles from "./Experiences.module.css";

import { ThemeContext } from "./../../ContextProvider/ThemeContext";

const Experiences = () => {
  const { newTheme } = useContext(ThemeContext);
  return (
    <div className={styles.experiences}>
      <h1 style={{ color: `${newTheme.title}` }} className={styles.heading}>
        Working Experience
      </h1>

      <div>
        <div className={styles.borderBottom} />
        <div className={styles.container}>
          <div className={styles.position}>
            <span style={{ marginRight: "5px" }}>
              Associate Software Engineer
            </span>
            <a href="https://www.indusnet.co.in/" target="_blank">
              {" "}
              @Indus Net Technologies
            </a>
          </div>
          <div className={styles.date}>Septeber 2022 - Present</div>
          <fieldset className={styles.responsibilites}>
            <legend>
              <h3> Roles & responsibilites </h3>
            </legend>
            <ul>
              <li>
                Developed and maintained dynamic user interface using React.
              </li>
              <li>
                Collaborated with the design team to translate UI/UX design
                figma into responsive web interface.
              </li>
              {/* <li>
              Developed a Live Quiz App 'Masai Refresh', that is currently being
              used by over 200+ students for interview preparations.
            </li> */}
              <li>
                Worked closely with backend developers to integrate RESTful
                APIs, ensuring seamless data flow between the front-end and
                backend systems.
              </li>
              <li>
                Partnered with the Product team to comprehend requirements and
                business specifications
              </li>
            </ul>
          </fieldset>
        </div>
      </div>
      <div style={{ marginTop: "20px" }}>
        <div className={styles.borderBottom} />

        <div className={styles.container}>
          <div className={styles.position}>
            <span style={{ marginRight: "5px" }}>
              {" "}
              Instructional Associate | Web Developer Intern
            </span>
            <a href="https://www.masaischool.com/" target="_blank">
              @Masai School
            </a>
          </div>
          <div className={styles.date}>October 2021 - July-2022</div>
          <fieldset className={styles.responsibilites}>
            <legend>
              <h3> Roles & responsibilites </h3>
            </legend>
            <ul>
              <li>
                Led the team of 4 where we were working on the frontend part of
                LMS for student profiles to furnish their details.
              </li>
              <li>
                Worked on the main layout part along with maintaining the state
                using Redux. Maintained the documentation.
              </li>
              {/* <li>
              Developed a Live Quiz App 'Masai Refresh', that is currently being
              used by over 200+ students for interview preparations.
            </li> */}
              <li>
                Worked on the frontend part with a quiz-specific modal where
                students can skip, submit, and report the questions.
              </li>
              <li>
                Assisted faculties and reviewing the projects made by students.
                Delivered lectures whenever required.
              </li>
            </ul>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
