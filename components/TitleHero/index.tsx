import React from "react";
import * as styles from "../../styles/HeroStyles";

export const TitleHero = () => {
  return (
    <h1 className={styles.heroStylesTitleContainer}>
      <div
        className={styles.heroStylesLettersContainer}
        data-aos="zoom-in"
        data-aos-duration="2000"
      >
        <div data-aos="fade-up" data-aos-duration="2000">
          M
        </div>
        <div data-aos="fade-down" data-aos-duration="2000">
          a
        </div>
        <div data-aos="fade-up" data-aos-duration="2000">
          u
        </div>
        <div data-aos="fade-down" data-aos-duration="2000">
          r
        </div>
        <div data-aos="fade-up" data-aos-duration="2000">
          í
        </div>
        <div data-aos="fade-down" data-aos-duration="2000">
          c
        </div>
        <div data-aos="fade-up" data-aos-duration="2000">
          i
        </div>
        <div data-aos="fade-down" data-aos-duration="2000">
          o
        </div>
      </div>
      <br />
      <div
        className="flex justify-center"
        data-aos="fade-left"
        data-aos-duration="2000"
      >
        <div data-aos="fade-down" data-aos-duration="2000">
          G
        </div>
        <div data-aos="fade-up" data-aos-duration="2000">
          e
        </div>
        <div data-aos="fade-down" data-aos-duration="2000">
          d
        </div>
        <div data-aos="fade-up" data-aos-duration="2000">
          r
        </div>
        <div data-aos="fade-down" data-aos-duration="2000">
          a
        </div>
        <div data-aos="fade-up" data-aos-duration="2000">
          t
        </div>
      </div>
    </h1>
  );
};
