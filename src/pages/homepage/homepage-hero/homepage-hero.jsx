import PropTypes from "prop-types";

import HomepageHeroCTA from "../homepage-hero-cta/homepage-hero-cta";

import styles from "./homepage-hero.module.css";

export default function HomepageHero({ visible }) {
  return (
    <div
      className={`${styles["homepage__hero"]} ${visible ? styles["homepage__hero--visible"] : ""}`}
    >
      <div className={styles["homepage__hero__name"]}>
        <h3>Hello, myself</h3>
        <h1
          style={{
            fontSize: "3.5rem",
            marginTop: "0.5rem",
            color: "var(--primary-color)",
          }}
        >
          Niyoj Oli.
        </h1>
      </div>

      <HomepageHeroCTA visible={visible} />
    </div>
  );
}

HomepageHero.propTypes = {
  visible: PropTypes.bool,
};
