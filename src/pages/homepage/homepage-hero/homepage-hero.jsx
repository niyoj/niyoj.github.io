import HomepageHeroCTA from "../homepage-hero-cta/homepage-hero-cta";

import styles from "./homepage-hero.module.css";

export default function HomepageHero() {
  return (
    <div className={styles["homepage__hero"]}>
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

      <HomepageHeroCTA />

      <div className={styles["homepage__hero__content"]}>
        <small>
          I&apos;m a full stack developer, AI/ML enthusiast, and I often design
          and write blogs.
        </small>
        <small style={{ textAlign: "right" }}>
          If there&apos;s a community event, count me in! I&apos;m always open
          to connecting and contributing.
        </small>
      </div>
    </div>
  );
}
