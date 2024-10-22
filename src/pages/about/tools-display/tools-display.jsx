import Arrow from "@assets/images/icons/arrow-right.svg?react";
import { ToolsCard } from "../tools-card/tools-card";

import styles from "./tools-display.module.css";

export function ToolsDisplay({ tools }) {
  return (
    <div
      className={`${styles["about__main__display"]} ${styles["scrollable"]}`}
    >
      <div
        className={`${styles["arrow_swipe"]} ${styles["arrow_swipe--left"]}`}
      >
        <Arrow />
      </div>

      {tools.map((techStack) => (
        <ToolsCard
          key={techStack.name}
          name={techStack.name}
          displayName={techStack.displayName ?? techStack.name}
          rating={techStack.rating}
        />
      ))}

      <div
        className={`${styles["arrow_swipe"]} ${styles["arrow_swipe--right"]}`}
      >
        <Arrow />
      </div>
    </div>
  );
}
