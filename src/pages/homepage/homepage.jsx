import { forwardRef } from "react";

import { Button } from "@ui";

import GitHub from "@assets/images/icons/github.svg?react";
import Linkedin from "@assets/images/icons/linkedin.svg?react";
import Twitter from "@assets/images/icons/twitter.svg?react";
import Redirect from "@assets/images/icons/open-in-blank.svg?react";

import SolidPlus from "@assets/images/abstracts/solid-plus.svg?react";

import styles from "./homepage.module.css";
import HomepageSide from "./homeapge_headshot/homepage_headshot";

export const HomePage = forwardRef((props, ref) => {
  return (
    <section className={styles["homepage"]} ref={ref}>
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

        <div className={styles["homepage__hero__cta"]}>
          <div className={styles["homepage__hero__cta--left"]}>
            <div className={styles["rotated"]}>
              <p>@niyoj</p>
              <div className={styles["social_links"]}>
                <div className={styles["arrow_line"]} />
                <GitHub height="1.25rem" width="" />
                <Linkedin height="1.25rem" width="" />
                <Twitter height="1.25rem" width="" />
              </div>
            </div>
          </div>

          <div className={styles["homepage__hero__cta--right"]}>
            <p>
              I&apos;m the kind of programmer who asks &lsquo;how does this
              work?&rsquo; then turns it into something that works even better.
            </p>
            <Button className={styles["homepage__cta"]}>
              Arrange a meet <Redirect style={{ height: 24 }} />{" "}
            </Button>
          </div>
          <SolidPlus
            className={`${styles["abstracts"]} ${styles["abstracts--solidplus"]}`}
          />
        </div>

        <div className={styles["homepage__hero__content"]}>
          <small>
            I&apos;m a full stack developer, AI/ML enthusiast, and I often
            design and write blogs.
          </small>
          <small>
            If there&apos;s a community event, count me in! I&apos;m always open
            to connecting and contributing.
          </small>
        </div>
      </div>

      <HomepageSide />
    </section>
  );
});

HomePage.displayName = "HomePage";
