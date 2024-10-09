import styles from "./homepage_headshot.module.css";

import Headshot from "@assets/images/headshot.png";
import HeadshotBG from "@assets/images/headshotBG.svg?react";

export default function HomepageSide() {
  return (
    <div className={styles["homepage__side"]}>
      <div className={styles["homepage__side__headshot_wrapper"]}>
        <img
          className={styles["homepage__side__headshot"]}
          src={Headshot}
          alt="Headshot of Niyoj"
        />
        <HeadshotBG className={styles["homepage__side__headshotbg"]} />
      </div>
    </div>
  );
}
