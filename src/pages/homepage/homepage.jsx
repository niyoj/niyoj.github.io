import { forwardRef } from "react";


import styles from "./homepage.module.css";

import HomepageSide from "./homeapge_headshot/homepage_headshot";
import HomepageHero from "./homepage-hero/homepage-hero";

export const HomePage = forwardRef((props, ref) => {
  return (
    <section className={styles["homepage"]} ref={ref}>
      <HomepageHero />
      <HomepageSide />
    </section>
  );
});

HomePage.displayName = "HomePage";
