import React from "react";
import { TitleHero } from "../TitleHero";
import * as styles from "../../styles/HeroStyles";

export const Hero = () => {
  return (
    <div className={styles.heroStylesContainer}>
      <div className={styles.heroStylesContent}>
        <TitleHero />
      </div>
      <div
        className={styles.heroStylesParagraphContainer}
        data-aos="zoom-in"
        data-aos-duration={2000}
      >
        <p className={styles.heroStylesParagraph}>
          Created in <span className="text-blue-500">2022</span> <br />
          Available for new projects
        </p>
      </div>
      <div
        className="flex justify-center"
        data-aos="zoom-in"
        data-aos-duration={2000}
      >
        <a href="#projects" className={styles.heroStylesStartButton}>
          Start
        </a>
      </div>
    </div>
  );
};
