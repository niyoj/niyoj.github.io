import { forwardRef } from "react";

import GitHub from "@assets/images/icons/github.svg?react";
import Linkedin from "@assets/images/icons/linkedin.svg?react";
import Twitter from "@assets/images/icons/twitter.svg?react";
import Redirect from "@assets/images/icons/open-in-blank.svg?react";

import Headshot from "@assets/images/headshot.png";
import HeadshotBG from "@assets/images/headshotBG.svg?react";

import styles from "./homepage.module.css";

export const HomePage = forwardRef((props, ref) => {
  return (
    <section className={styles["homepage"]} ref={ref}>
      <div className={styles["homepage__hero"]}>
        <div className={styles["homepage__hero__name"]}>
          <h3>Hello, myself</h3>
          <h1 style={{ fontSize: "3.5rem" }}>Niyoj Oli.</h1>
        </div>

        <div className={styles["homepage__hero__cta"]}>
          <div className={styles["homepage__hero__cta--left"]}>
            <p>@niyoj</p>
            <div className={styles["social_links"]}>
              <GitHub />
              <Linkedin />
              <Twitter />
            </div>
          </div>

          <div className={styles["homepage__hero__cta--right"]}>
            <p>
              I&apos;m the kind of programmer who asks &lsquo;how does this
              work?&rsquo; then turns it into something that works even better.
            </p>
            <button>
              Arrange a meet <Redirect />{" "}
            </button>
          </div>
        </div>

        <div className={styles["homepage__hero__content"]}>
          <p>
            I&apos;m a full stack developer, AI/ML enthusiast, and I often
            design and write blogs.
          </p>
          <p>
            If there&apos;s a community event, count me in! I&apos;m always open
            to connecting and contributing.
          </p>
        </div>
      </div>
      <div className={styles["homepage__side"]}>
        <img src={Headshot} alt="Headshot of Niyoj" />
        <HeadshotBG />
      </div>
    </section>
  );
});

HomePage.displayName = "HomePage";
