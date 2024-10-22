import { Button } from "@ui";

import GitHub from "@assets/images/icons/github.svg?react";
import Linkedin from "@assets/images/icons/linkedin.svg?react";
import Twitter from "@assets/images/icons/twitter.svg?react";
import Redirect from "@assets/images/icons/open-in-blank.svg?react";
import SolidPlus from "@assets/images/abstracts/solid-plus.svg?react";

import styles from "./homepage-hero-cta.module.css";

export default function HomepageHeroCTA() {
  return (
    <div className={styles["homepage__hero__cta"]}>
      <div className={styles["homepage__hero__cta--left"]}>
        <div className={styles["rotated"]}>
          <p>@niyoj</p>
          <div className={styles["social_links"]}>
            <div className={styles["arrow_line"]} />
            <GitHub height="1.25rem" />
            <Linkedin height="1.25rem" />
            <Twitter height="1.25rem" />
          </div>
        </div>
      </div>

      <div className={styles["homepage__hero__cta--right"]}>
        <p>
          I&apos;m the kind of programmer who asks &lsquo;how does this
          work?&rsquo; then turns it into something that works even better.
        </p>
        <Button className={styles["homepage__cta"]}>
          Arrange a meet <Redirect style={{ height: 24 }} />
        </Button>
      </div>
      <SolidPlus
        className={`${styles["abstracts"]} ${styles["abstracts--solidplus"]}`}
      />
    </div>
  );
}
