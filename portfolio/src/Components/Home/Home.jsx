import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import Card from "../Card/Card";
import SideIcons from "../SideIcons/SideIcons";
import TechStacks from "../TechStacks/TechStacks";
import AOS from "aos";
import "aos/dist/aos.css";

import { Button } from "../Button/Button";
import About from "../About/About";
import { projects, CurrentProjectArray } from "../../Utils/Projects";
import Contact from "../Contact/Contact";
import { ThemeContext } from "../../ContextProvider/ThemeContext";
import CurrentProjects from "../CurrentProjects/CurrentProjects";
import Experiences from "./../WorkExperience/Experiences";

const Home = ({ scrollRef }) => {
  const [projectArray, setProjectArray] = useState(projects.slice(0, 4));

  const { newTheme } = React.useContext(ThemeContext);
  const [offset, setOffset] = useState(0);
  const [location, setLocation] = useState(0);
  useEffect(() => {
    AOS.init();
  });

  const handleOffset = () => {
    setOffset(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleOffset);
    return () => window.removeEventListener("scroll", handleOffset);
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor = newTheme.background;
  }, [newTheme]);

  const handleButton = () => {};

  // console.log(offset);
  const handleShowMoreBtn = () => {
    if (projects.length === projectArray.length) {
      setProjectArray(projects.slice(0, 4));
      window.scrollTo(0, location);
    } else {
      setProjectArray(projects);
      setLocation(offset);
    }
  };

  return (
    <div ref={scrollRef}>
      <SideIcons />
      <div
        id="home"
        className={styles.profile}
        style={{ backgroundColor: `${newTheme.imgBackground}` }}
      >
        <div
          data-aos="fade-zoom-out"
          className={styles.intro}
          style={{
            color: `${newTheme.para}`,
            transform: `translateX(-${offset * 2.5}px)`,
            opacity: `${offset > 300 ? "0" : offset > 160 ? ".5" : "1"}`,
          }}
        >
          <h1>
            <span>Hey👋, I'm </span>
            <div className={styles.name} style={{ color: `${newTheme.title}` }}>
              Swapnil Landage.
            </div>
          </h1>
          <h1>I am a Full Stack Web Developer.</h1>
          <div className={styles.btn}>
            <a
              href="https://drive.google.com/file/d/1p8SenT38x1s7QR9JswZiAYU1BpHMu-Ks/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <Button
                text={
                  <span className={styles.resumeBtn}>
                    <span>Resume</span> <i className="fas fa-file-download"></i>
                  </span>
                }
                handleButton={handleButton}
              />
            </a>
          </div>
        </div>

        <div
          style={{
            transform: `translateX(${offset * 2.5}px)`,
            opacity: `${offset > 300 ? "0" : offset > 160 ? ".5" : "1"}`,
          }}
          className={styles.profileImage}
        >
          <img
            src="https://github.com/Swapnil1296/portfolio_images/blob/main/images/profile-pic%20(1).png?raw=true"
            alt="Profile pic"
          />
        </div>
      </div>

      <div
        id="about"
        style={{
          background: `${newTheme.highlightBackground}`,
        }}
        className={styles.experience}
      >
        <About />
      </div>

      <div id="techStacks" className={styles.techStacks}>
        <TechStacks />
      </div>
      {/* Working Experience */}
      <div
        id="about"
        style={{
          background: `${newTheme.highlightBackground}`,
        }}
        className={styles.experience}
      >
        <Experiences />
      </div>
      {/* project section from here => */}
      <div id="projects" className={styles.projects}>
        <h1 style={{ color: `${newTheme.title}` }} className={styles.heading}>
          Few Things I've Build
        </h1>{" "}
        <div className={styles.borderBottom} />
        <h2 style={{ color: `${newTheme.title}` }} className={styles.heading}>
          "Committed to ongoing innovation, with new projects steadily enhancing
          my portfolio."
        </h2>
        <div>
          {projectArray.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
        <h2 style={{ color: `${newTheme.title}` }} className={styles.heading}>
          Upcomming Projects :
        </h2>
        <CurrentProjects />
        <Button
          text={
            projects.length !== projectArray.length ? "Show More" : "Show Less"
          }
          handleButton={handleShowMoreBtn}
        />
      </div>

      <div
        style={{
          background: `${newTheme.highlightBackground}`,
        }}
      >
        <Contact />
      </div>
    </div>
  );
};

export default Home;
