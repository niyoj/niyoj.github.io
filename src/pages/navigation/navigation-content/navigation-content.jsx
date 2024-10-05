import { Activities } from "./activities/activities";
import { MenuList } from "./menu-list/menu-list";

import GitHub from "@assets/images/icons/github.svg?react";
import Linkedin from "@assets/images/icons/linkedin.svg?react";
import Twitter from "@assets/images/icons/twitter.svg?react";

import styles from "./navigation-content.module.css";

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

export function NavigationContent() {
  return (
    <main className={styles["navpage__main"]}>
      <div className={styles["navpage__main__top"]}>
        <MenuList title="menu" items={menu1} />
        <MenuList title="menu" items={menu2} />
        <Activities items={activities} />
      </div>

      <div style={{ height: "1px", backgroundColor: "#ffffff", width: "100%" }}>
        .
      </div>

      <div className={styles["navpage__main__bottom"]}>
        <small> Designed and Developed by Niyoj</small>
        <div className={styles["navpage__icons"]}>
          <Linkedin className={styles["social_icons"]} />
          <Twitter className={styles["social_icons"]} />
          <GitHub className={styles["social_icons"]} />
        </div>
      </div>
    </main>
  );
}
