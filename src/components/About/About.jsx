import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>My Expertise</h2>
      <div className={styles.content}>
        {/* <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        /> */}
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/sde.png")} alt="Cursor icon" className={styles.aboutImage}/>
            <div className={styles.aboutItemText}>
              <h3>Software Development</h3>
              <p>
                Experienced in both functional and OOP: Python, Java, JavaScript, TypeScript
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/front.png")} alt="Server icon" className={styles.aboutImage}/>
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
              Over 2 years of development experience in HTML, CSS, JS, React and NextJS frameworks.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/mobile.png")} alt="UI icon" className={styles.aboutImage} />
            <div className={styles.aboutItemText}>
              <h3>Flutter Dev - Android, iOS</h3>
              <p>
              Skilled in developing hybrid mobile apps and cross-platform solutions using the Flutter framework.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cp.png")} alt="UI icon" className={styles.aboutImage} />
            <div className={styles.aboutItemText}>
              <h3>Competitive Programming</h3>
              <p>
                Two years of competitive programming practice, thrive on the thrill of algorithmic challenges.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
