import React from "react";
import { GitSvg } from "../SvgComponents/GitSvg";
import { NextSvg } from "../SvgComponents/NextSvg";
import { NodeSvg } from "../SvgComponents/NodeSvg";
import { ReactSvg } from "../SvgComponents/ReactSvg";
import { TailwindSvg } from "../SvgComponents/TailwindSvg";
import { ViteSvg } from "../SvgComponents/ViteSvg";
import { GitHubSvg } from "../SvgComponents/GitHubSvg";
import { VsCodeSvg } from "../SvgComponents/VsCodeSvg";
import * as styles from "../../styles/SkillsStyles";

export const Skills = () => {
  return (
    <div id="skills" className="pb-10">
      <div className={styles.skillsStylesTitleContainer} id="projects">
        <h1
          data-aos="zoom-in"
          data-aos-duration={2000}
          className={styles.skillsStylesTitle}
        >
          Skills
        </h1>
      </div>

      <div className={styles.skillsStylesContent}>
        <div className={styles.skillsStylesItemsContainer}>
          <div
            data-aos="flip-down"
            data-aos-duration={2000}
            className={styles.skillsStylesItemContainer}
          >
            <ReactSvg />

            <div className={styles.skillsStylesDescriptionContainer}>
              <div className={styles.skillsStylesDescription}>
                <span className="font-bold text-white">React.js:</span> 1 year
                of experience
              </div>
            </div>
          </div>
          <div
            data-aos="flip-down"
            data-aos-duration={2000}
            className={styles.skillsStylesItemContainer}
          >
            <NextSvg />
            <div className={styles.skillsStylesDescriptionContainer}>
              <div className={styles.skillsStylesDescription}>
                <span className="font-bold text-white">Next.js:</span> 10 months
                of experience
              </div>
            </div>
          </div>
          <div
            data-aos="flip-down"
            data-aos-duration={2000}
            className={styles.skillsStylesItemContainer}
          >
            <TailwindSvg />
            <div className={styles.skillsStylesDescriptionContainer}>
              <div className={styles.skillsStylesDescription}>
                <span className="font-bold text-white">Tailwind CSS:</span> 1
                year of experience
              </div>
            </div>
          </div>
          <div
            data-aos="flip-down"
            data-aos-duration={2000}
            className={styles.skillsStylesItemContainer}
          >
            <ViteSvg />
            <div className={styles.skillsStylesDescriptionContainer}>
              <div className={styles.skillsStylesDescription}>
                <span className="font-bold text-white">Vite.js:</span> 7 months
                of experience
              </div>
            </div>
          </div>
          <div
            data-aos="flip-down"
            data-aos-duration={2000}
            className={styles.skillsStylesItemContainer}
          >
            <NodeSvg />
            <div className={styles.skillsStylesDescriptionContainer}>
              <div className={styles.skillsStylesDescription}>
                <span className="font-bold text-white">Node.js:</span> Without
                much experience
              </div>
            </div>
          </div>
          <div
            data-aos="flip-down"
            data-aos-duration={2000}
            className={styles.skillsStylesItemContainer}
          >
            <GitSvg />
            <div className={styles.skillsStylesDescriptionContainer}>
              <div className={styles.skillsStylesDescription}>
                <span className="font-bold text-white">Git:</span> 1 year and 3
                months of experience
              </div>
            </div>
          </div>
          <div
            data-aos="flip-down"
            data-aos-duration={2000}
            className={styles.skillsStylesItemContainer}
          >
            <GitHubSvg />
            <div className={styles.skillsStylesDescriptionContainer}>
              <div className={styles.skillsStylesDescription}>
                <span className="font-bold text-white">GitHub:</span> 1 year and
                5 months of experience
              </div>
            </div>
          </div>
          <div
            data-aos="flip-down"
            data-aos-duration={2000}
            className={styles.skillsStylesItemContainer}
          >
            <VsCodeSvg />
            <div className={styles.skillsStylesDescriptionContainer}>
              <div className={styles.skillsStylesDescription}>
                <span className="font-bold text-white">
                  Visual Studio Code:
                </span>{" "}
                2 years of experience
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
