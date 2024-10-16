import ArrowRight from "@assets/images/icons/arrow-right.svg?react";
import React from "@assets/images/icons/tech/react.svg?react";

import styles from "./tools-card.module.css";

export function ToolsCard() {
  return (
    <div className={styles["card"]}>
      <React className={styles["card__icon"]} />

      <div className={styles["card__info"]}>
        <h3>React JS</h3>
        <small>begineer</small>
      </div>

      <small>
        See related projects <ArrowRight className={styles["arrow"]} />
      </small>
    </div>
  );
}
