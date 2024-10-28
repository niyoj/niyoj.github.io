import { forwardRef } from "react";
import PropTypes from "prop-types";

import { Logo } from "@ui";

import GitHub from "@assets/images/icons/github.svg?react";
import LinkedIn from "@assets/images/icons/linkedin.svg?react";
import Twitter from "@assets/images/icons/twitter.svg?react";

import styles from "./contact.module.css";

export const Contact = forwardRef((props, ref) => {
  return (
    <section
      className={`${styles["contact"]} ${props.visible ? styles["contact--visible"] : ""}`}
      ref={ref}
    >
      <header className={styles["contact__header"]}>
        <p>Got a project? Looking to Collaborate?</p>
        <h1>
          Let&apos;s Have a Talk
          <span style={{ color: "var(--color-300)" }}>.</span>
        </h1>
      </header>

      <main className={styles["contact__list"]}>
        <a href="mailto:niyoj.dev@gmail.com">
          <p>niyoj.dev@gmail.com</p>
        </a>
        <div className={styles["social_links"]}>
          <GitHub />
          <LinkedIn />
          <Twitter />
        </div>
      </main>

      <footer>
        <Logo />

        <ul>
          <li>home</li>
          <li>about</li>
          <li>portfolio</li>
          <li>blogs</li>
          <li>contact</li>
        </ul>
      </footer>
    </section>
  );
});

Contact.displayName = "Contact";
Contact.propTypes = {
  visible: PropTypes.bool,
};
