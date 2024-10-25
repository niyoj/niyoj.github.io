import { forwardRef } from "react";
import PropTypes from "prop-types";

import { SectionHeader } from "@features";
import { AboutMain } from "./about-main/about-main";

import { Tools } from "./prop-types";
import styles from "./about.module.css";

export const About = forwardRef((props, ref) => {
  return (
    <section className={styles["about"]} ref={ref}>
      <SectionHeader
        title="About me"
        subtitle="Gears I work with"
        description="I design, code, write, and work with cloud and AI, aiming for clean code and mastery."
      />

      <AboutMain tools={props.tools} />
    </section>
  );
});

About.displayName = "About";

About.propTypes = {
  tools: PropTypes.arrayOf(Tools).isRequired,
};
