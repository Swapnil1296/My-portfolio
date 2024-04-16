import React from "react";
import { ThemeContext } from "../../ContextProvider/ThemeContext";
import WindowSize from "../../Utils/WindowSize";
import styles from "./About.module.css";

const About = () => {
  const { newTheme } = React.useContext(ThemeContext);
  const [width] = WindowSize();

  return (
    <div
      className={styles.container}
      style={{ boxShadow: `3px 3px 5px ${newTheme.line}` }}
    >
      <div className={styles.first}>
        <img
          src={
            "https://github.com/Swapnil1296/portfolio_images/blob/main/images/profile-pic%20(1).png?raw=true"
          }
          alt=""
        />
      </div>
      <div className={styles.second}>
        <h1 style={{ color: `${newTheme.title}` }} className={styles.heading}>
          About Me
        </h1>
        <div className={styles.borderBottom} />
        <p style={{ color: `${newTheme.para}` }} className={styles.aboutMe}>
          Hello! My name is Swapnil Landage, and I'm passionate about crafting
          experiences on the internet. My journey into web development began a
          few years ago when I started tinkering with HTML & CSS, and since
          then, I've been on an exciting path of growth and learning. <br />
          Over the past two-plus years, I've had the privilege of working on
          various web applications and significant projects. Through these
          experiences, I've not only honed my technical skills but also gained
          invaluable insights into teamwork, leadership, and effective
          communication. <br />
          Today, as a seasoned full stack web developer, I bring a wealth of
          hands-on experience and expertise to the table. Whether it's building
          intuitive user interfaces, architecting robust backend systems, or
          collaborating with cross-functional teams, I thrive on the challenges
          and opportunities that web development presents.
          <br />
          <span style={{ color: `#00a0a0` }}>
            I'm now eagerly seeking new opportunities to leverage my skills and
            contribute to innovative projects as a full stack web developer.
            Let's build something remarkable together!
          </span>
          .
        </p>
      </div>
    </div>
  );
};

export default About;
