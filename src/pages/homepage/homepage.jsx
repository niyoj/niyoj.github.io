import { forwardRef } from "react";

import styles from "./homepage.module.css";

import HomepageSide from "./homeapge_headshot/homepage_headshot";
import HomepageHero from "./homepage-hero/homepage-hero";

export const HomePage = forwardRef((props, ref) => {
  return (
    <section className={styles["homepage"]} ref={ref}>
      <HomepageHero />
      <HomepageSide />

      <div className={styles["homepage__bottom"]}>
        <small>
          I&apos;m a full stack developer, AI/ML enthusiast, and I often design
          and write blogs.
        </small>
        <small style={{ textAlign: "right" }}>
          If there&apos;s a community event, count me in! I&apos;m always open
          to connecting and contributing.
        </small>
      </div>
    </section>
  );
});

HomePage.displayName = "HomePage";
