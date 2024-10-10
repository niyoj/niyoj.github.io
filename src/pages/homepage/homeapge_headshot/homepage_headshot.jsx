import styles from "./homepage_headshot.module.css";

import Headshot from "@assets/images/headshot.png";
import HeadshotBG from "@assets/images/headshotBG.svg?react";

import DotsCircle from "@assets/images/abstracts/dots-circle.svg?react";
import Plus from "@assets/images/abstracts/plus.svg?react";
import ZigZag from "@assets/images/abstracts/zigzag.svg?react";

export default function HomepageSide() {
  return (
    <div className={styles["homepage__side"]}>
      <ZigZag
        className={`${styles["abstract"]} ${styles["abstract--zigzag_1"]}`}
      />
      <div className={styles["homepage__side__headshot_wrapper"]}>
        <img
          className={styles["homepage__side__headshot"]}
          src={Headshot}
          alt="Headshot of Niyoj"
        />
        <HeadshotBG className={styles["homepage__side__headshotbg"]} />
        <ZigZag
          className={`${styles["abstract"]} ${styles["abstract--zigzag_2"]}`}
        />
      </div>
      <DotsCircle
        className={`${styles["abstract"]} ${styles["abstract--dotscircle"]}`}
      />
      <Plus className={`${styles["abstract"]} ${styles["abstract--plus"]}`} />
    </div>
  );
}
