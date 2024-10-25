import { forwardRef } from "react";
import PropTypes from "prop-types";

import { AboutMain } from "./about-main/about-main";
import Angle from "@assets/images/icons/angle.svg?react";
import {Title} from "@ui";

import { Tools } from "./prop-types";
import styles from "./about.module.css";

export const About = forwardRef((props, ref) => {
  return (
    <section className={styles["about"]} ref={ref}>
      <header className={styles["about__header"]}>
        <div className={styles["about__header--left"]}>
          <Title>About me</Title>
          <h1>Gears I work with</h1>
        </div>
        <div className={styles["about__header--right"]}>
          <p>
            I design, code, write, and work with cloud and AI, aiming for clean
            code and mastery.
          </p>
          <div className={styles["about__header__btn_wrapper"]}>
            <button>
              <Angle height="2rem" fill="#ffffff" />
            </button>
            <button>
              <Angle
                height="2rem"
                fill="#ffffff"
                style={{ transform: "rotateY(-180deg)" }}
              />
            </button>
          </div>
        </div>
      </header>

      <AboutMain tools={props.tools} />
    </section>
  );
});

About.displayName = "About";

About.propTypes = {
  tools: PropTypes.arrayOf(Tools).isRequired,
};
