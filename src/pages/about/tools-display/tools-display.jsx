import Arrow from "@assets/images/icons/arrow-right.svg?react";
import { ToolsCard } from "../tools-card/tools-card";

import styles from "./tools-display.module.css";
import { Tools } from "../prop-types";
import PropTypes from "prop-types";

export function ToolsDisplay({ tools }) {
  return (
    <div className={`${styles["display"]} ${styles["display--scrollable"]}`}>
      <div
        className={`${styles["arrow_swipe"]} ${styles["arrow_swipe--left"]}`}
      >
        <Arrow />
      </div>

      {tools.map((tool) => (
        <ToolsCard
          key={tool.name}
          name={tool.name}
          displayName={tool.displayName ?? tool.name}
          rating={tool.rating}
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

ToolsDisplay.propTypes = {
  tools: PropTypes.arrayOf(Tools),
};
