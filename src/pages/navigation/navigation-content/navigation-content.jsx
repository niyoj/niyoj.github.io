import { Activities } from "./activities/activities";
import { MenuList } from "./menu-list/menu-list";

import GitHub from "@assets/images/icons/github.svg?react";
import Linkedin from "@assets/images/icons/linkedin.svg?react";
import Twitter from "@assets/images/icons/twitter.svg?react";

import styles from "./navigation-content.module.css";
import PropTypes from "prop-types";

const menu1 = ["home", "about", "porfolio"];
const menu2 = ["blogs", "contact"];

const activities = [
  {
    title: "Education Information Management System",
    description:
      "A project I made for IOE, Thapathali Campus that manages the current student records at the campus.",
  },
  {
    title: "Education Information Management System",
    description:
      "A project I made for IOE, Thapathali Campus that manages the current student records at the campus.",
  },
  {
    title: "Education Information Management System",
    description:
      "A project I made for IOE, Thapathali Campus that manages the current student records at the campus.",
  },
  {
    title: "Education Information Management System",
    description:
      "A project I made for IOE, Thapathali Campus that manages the current student records at the campus.",
  },
];

const links = {
  linkedin: "https://linkedin.com/niyoj",
  github: "https://github.com/niyoj",
  twitter: "https://twitter.com/oliniyoj",
};

export function NavigationContent({ active = false }) {
  return (
    <main className={styles["navpage__main"]}>
      <div className={styles["navpage__main__top"]}>
        <MenuList title="menu" items={menu1} active={active} />
        <MenuList title="menu" items={menu2} active={active} />
        <Activities items={activities} active={active} />
      </div>

      <div style={{ height: "1px", backgroundColor: "#ffffff", width: "100%" }}>
        .
      </div>

      <div className={styles["navpage__main__bottom"]}>
        <small> Designed and Developed by Niyoj</small>
        <div className={styles["navpage__icons"]}>
          <a href={links.linkedin} target="_blank">
            <Linkedin className={styles["social_icons"]} />
          </a>
          <a href={links.twitter} target="_blank">
            <Twitter className={styles["social_icons"]} />
          </a>
          <a href={links.github} target="_blank">
            <GitHub className={styles["social_icons"]} />
          </a>
        </div>
      </div>
    </main>
  );
}

NavigationContent.propTypes = {
  active: PropTypes.bool,
};
