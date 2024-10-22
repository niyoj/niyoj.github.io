import ArrowRight from "@assets/images/icons/arrow-right.svg?react";

import styles from "./tools-card.module.css";
import { Tools } from "../prop-types";

import { TechIcons } from "@ui";

export function ToolsCard({ name, displayName, rating }) {
  return (
    <div className={styles["card"]}>
      <TechIcons keyword={name} className={styles["card__icon"]} />

      <div className={styles["card__info"]}>
        <h3>{displayName}</h3>
        <small>{rating}</small>
      </div>

      <small>
        See related projects <ArrowRight className={styles["arrow"]} />
      </small>
    </div>
  );
}

ToolsCard.propTypes = Tools;
