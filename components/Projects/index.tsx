import Image from "next/image";
import Link from "next/link";
import React from "react";
import Img1 from "../../assets/project-1.webp";
import Img2 from "../../assets/project-2.webp";
import Img3 from "../../assets/project-3.webp";
import Img4 from "../../assets/project-4.webp";
import * as styles from "../../styles/ProjectsStyles";

export const Projects = () => {
  return (
    <div className={styles.projectsStylesContainer}>
      <div className={styles.projectsStylesTitleContainer} id="projects">
        <h1
          data-aos="zoom-in"
          data-aos-duration={2000}
          className={styles.projectsStylesTitle}
        >
          Projects
        </h1>
      </div>

      <div className={styles.projectsStylesContent}>
        <div className="max-w-[1200px] p-10">
          <div className={styles.projectsStylesItemReverse}>
            <div data-aos-duration={2000} data-aos="fade-up-right">
              <Link
                target={"_blank"}
                href={"https://scalar.dev.br/"}
                className="image-outline"
              >
                <Image src={Img1} alt="image" width={550} />

                <div className="outline o-1"></div>
                <div className="outline o-2"></div>
                <div className="outline o-3"></div>
                <div className="outline o-4"></div>
              </Link>
            </div>
            <div
              className={styles.prjectsStylesDescriptionContainer}
              data-aos-duration={2000}
              data-aos="fade-down-right"
            >
              <h1 className={styles.projectsStylesTitleDescription}>
                Scalar DEV
              </h1>
              <p className={styles.projectsStylesParagraphDescription}>
                Web development company. Website developed in 2021
              </p>
            </div>
          </div>
          <div className={styles.projectsStylesItem}>
            <div data-aos-duration={2000} data-aos="fade-down-right">
              <Link
                target={"_blank"}
                href={"https://duofree.vercel.app/"}
                className="image-outline"
              >
                <Image src={Img2} alt="image" width={550} />
                <div className="outline o-1"></div>
                <div className="outline o-2"></div>
                <div className="outline o-3"></div>
                <div className="outline o-4"></div>
              </Link>
            </div>
            <div
              className={styles.prjectsStylesDescriptionContainer}
              data-aos-duration={2000}
              data-aos="fade-up-right"
            >
              <h1 className={styles.projectsStylesTitleDescription}>Duofree</h1>
              <p className={styles.projectsStylesParagraphDescription}>
                Website developed for Design training. Website developed in 2022
              </p>
            </div>
          </div>
          <div className={styles.projectsStylesItemReverse}>
            <div data-aos-duration={2000} data-aos="fade-up-right">
              <Link
                target={"_blank"}
                href={"https://mustang-roan.vercel.app/"}
                className="image-outline"
              >
                <Image src={Img3} alt="image" width={550} />
                <div className="outline o-1"></div>
                <div className="outline o-2"></div>
                <div className="outline o-3"></div>
                <div className="outline o-4"></div>
              </Link>
            </div>
            <div
              className={styles.prjectsStylesDescriptionContainer}
              data-aos-duration={2000}
              data-aos="fade-down-right"
            >
              <h1 className={styles.projectsStylesTitleDescription}>Mustang</h1>
              <p className={styles.projectsStylesParagraphDescription}>
                Website developed for Design training. Website developed in 2022
              </p>
            </div>
          </div>
          <div className={styles.projectsStylesItem}>
            <div data-aos-duration={2000} data-aos="fade-down-right">
              <Link
                target={"_blank"}
                href={"https://restauly.vercel.app/"}
                className="image-outline"
              >
                <Image src={Img4} alt="image" width={550} />
                <div className="outline o-1"></div>
                <div className="outline o-2"></div>
                <div className="outline o-3"></div>
                <div className="outline o-4"></div>
              </Link>
            </div>
            <div
              className={styles.prjectsStylesDescriptionContainer}
              data-aos-duration={2000}
              data-aos="fade-up-right"
            >
              <h1 className={styles.projectsStylesTitleDescription}>
                Restauly
              </h1>
              <p className={styles.projectsStylesParagraphDescription}>
                Website developed for Design training. Website developed in 2022
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
