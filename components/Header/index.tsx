import React, { useContext } from "react";
import { LogoSvg } from "../SvgComponents/LogoSvg";
import * as styles from "../../styles/HeaderStyles/index";
import { ContextApi } from "../../Context/index";
import Link from "next/link";

export const Header = () => {
  const { show, setShow } = useContext(ContextApi);
  return (
    <div data-aos="fade-up" className={styles.headerStylesContainer}>
      <div>
        <div className={styles.headerStylesContent}>
          <div className={styles.headerStylesLogoContainer}>
            <LogoSvg width="75" height="75" />
          </div>
          <button
            className={styles.headerStylesBurguerButton}
            onClick={() => setShow(!show)}
          >
            <div
              className={`${show ? styles.headerStylesButtonClosedLine1 : ""} ${
                styles.headerStylesButtonOpenedLine1
              } `}
            ></div>
            <div
              className={`${show ? styles.headerStylesButtonClosedLine2 : ""} ${
                styles.headerStylesButtonOpenedLine2
              }`}
            ></div>
          </button>
        </div>
        {show && (
          <div
            data-aos="fade-down"
            className={styles.headerStylesMenuContainer}
          >
            <div className="mb-10">
              <Link
                onClick={() => setShow(!show)}
                href="#"
                className={styles.headerStylesMenuLinks}
              >
                Home
              </Link>
            </div>
            <div className="mb-10">
              <Link
                onClick={() => setShow(!show)}
                href="#projects"
                className={styles.headerStylesMenuLinks}
              >
                Projects
              </Link>
            </div>
            <div className="mb-10">
              <Link
                onClick={() => setShow(!show)}
                href="#skills"
                className={styles.headerStylesMenuLinks}
              >
                Skills
              </Link>
            </div>
            <div className="mb-10">
              <Link
                onClick={() => setShow(!show)}
                href="#contact"
                className={styles.headerStylesMenuLinks}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
