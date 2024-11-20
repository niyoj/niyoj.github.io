import { Button } from "@ui";
import { getLink } from "@data";

import GitHub from "@assets/images/icons/github.svg?react";
import Linkedin from "@assets/images/icons/linkedin.svg?react";
import Twitter from "@assets/images/icons/twitter.svg?react";
import Redirect from "@assets/images/icons/open-in-blank.svg?react";
import SolidPlus from "@assets/images/abstracts/solid-plus.svg?react";

import styles from "./homepage-hero-cta.module.css";
import PropTypes from "prop-types";

export default function HomepageHeroCTA({ visible }) {
  return (
    <div
      className={`${styles["homepage__hero__cta"]} ${visible ? styles["visible"] : ""}`}
    >
      <div className={styles["homepage__hero__cta--left"]}>
        <div className={styles["rotated"]}>
          <p>@niyoj</p>
          <div className={styles["social_links"]}>
            <div className={styles["arrow_line"]} />
            <a href={getLink("github")} target="_blank">
              <GitHub height="1.25rem" />
            </a>
            <a href={getLink("linkedin")} target="_blank">
              <Linkedin height="1.25rem" />
            </a>
            <a href={getLink("x")} target="_blank">
              <Twitter height="1.25rem" />
            </a>
          </div>
        </div>
      </div>

      <div className={styles["homepage__hero__cta--right"]}>
        <p>
          I&apos;m the kind of programmer who asks &lsquo;how does this
          work?&rsquo; then turns it into something that works even better.
        </p>
        <a href={getLink("calendly")} target="_blank">
          <Button className={styles["homepage__cta"]}>
            Arrange a meet <Redirect style={{ height: 24 }} />
          </Button>
        </a>
      </div>
      <SolidPlus
        className={`${styles["abstracts"]} ${styles["abstracts--solidplus"]}`}
      />
    </div>
  );
}

HomepageHeroCTA.propTypes = {
  visible: PropTypes.bool,
};
