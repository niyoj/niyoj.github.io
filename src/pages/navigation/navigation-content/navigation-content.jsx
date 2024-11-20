import { getLink, getLatestActivities } from "@data";

import { Activities } from "./activities/activities";
import { MenuList } from "./menu-list/menu-list";

import GitHub from "@assets/images/icons/github.svg?react";
import Linkedin from "@assets/images/icons/linkedin.svg?react";
import Twitter from "@assets/images/icons/twitter.svg?react";

import styles from "./navigation-content.module.css";
import PropTypes from "prop-types";
import { useLayoutEffect, useRef, useState } from "react";

const dummyMenu1 = ["home", "about", "porfolio"];
const dummyMenu2 = ["blogs", "contact"];

export function NavigationContent({ active = false, onNavigate }) {
  const [activities, setActivities] = useState(getLatestActivities);
  const [menu1, setMenu1] = useState(dummyMenu1);
  const [menu2, setMenu2] = useState(dummyMenu2);

  const ref = useRef(null);

  useLayoutEffect(() => {
    const handleResize = (event) => {
      const oneActivitySpace = ref.current.children[2].children[0].clientHeight;

      const spaceAvaiable = event.target.innerHeight - 250 - 250;
      const numbers = Math.floor(spaceAvaiable / oneActivitySpace);
      setActivities(getLatestActivities().slice(0, numbers));

      // collapse menu on smaller screen on resize
      if (event.target.innerWidth < 500) {
        setMenu1([...dummyMenu1, ...dummyMenu2]);
        setMenu2([]);
      } else {
        setMenu1(dummyMenu1);
        setMenu2(dummyMenu2);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (window.innerWidth < 500 && menu2.length !== 0) {
    setMenu1([...menu1, ...menu2]);
    setMenu2([]);
  }

  return (
    <main className={styles["navpage__main"]}>
      <div className={styles["navpage__main__top"]}>
        {menu1.length && (
          <MenuList
            title="menu"
            items={menu1}
            active={active}
            onNavigate={onNavigate}
          />
        )}
        {Boolean(menu2.length) && (
          <MenuList
            title="menu"
            items={menu2}
            active={active}
            onNavigate={onNavigate}
          />
        )}
        <Activities items={activities} active={active} ref={ref} />
      </div>

      <div style={{ height: "1px", backgroundColor: "#ffffff", width: "100%" }}>
        .
      </div>

      <div className={styles["navpage__main__bottom"]}>
        <small> Designed and Developed by Niyoj</small>
        <div className={styles["navpage__icons"]}>
          <a href={getLink("linkedin")} target="_blank">
            <Linkedin className={styles["social_icons"]} />
          </a>
          <a href={getLink("x")} target="_blank">
            <Twitter className={styles["social_icons"]} />
          </a>
          <a href={getLink("github")} target="_blank">
            <GitHub className={styles["social_icons"]} />
          </a>
        </div>
      </div>
    </main>
  );
}

NavigationContent.propTypes = {
  active: PropTypes.bool,
  onNavigate: PropTypes.func,
};
