import { useState } from "react";

import { Chips } from "@ui";
import Arrow from "@assets/images/icons/arrow-right.svg?react";

import styles from "./about-main.module.css";

import { TechStacks } from "../prop-types";
import { ToolsCard } from "../tools-card/tools-card";

export function AboutMain({ techStacks = [] }) {
  const [filtered, setFiltered] = useState([]);

  const categories = techStacks
    .map((techStack) => techStack.category)
    .flat()
    .filter((item, index, arr) => arr.indexOf(item) === index);

  const handleFilterChange = (name, checked) => {
    if (checked) {
      setFiltered((prev) => [name, ...prev]);
    } else {
      setFiltered((prev) => prev.filter((item) => item !== name));
    }
  };

  const visibleTechStacks =
    filtered.length === 0
      ? techStacks
      : techStacks.filter((item) =>
        item.category.some((element) => filtered.includes(element)),
      );

  return (
    <main className={styles["about__main"]}>
      <div className={styles["about__main__select"]}>
        <small>Filter tools by category</small>

        <div className={styles["about__main__select__list"]}>
          {categories.map((item, index) => (
            <Chips key={index} onChange={handleFilterChange.bind(null, item)}>
              {item}
            </Chips>
          ))}
        </div>
      </div>
      <div className={styles["about__main__display--container"]}>
        <div
          className={`${styles["about__main__display"]} ${styles["scrollable"]}`}
        >
          <div
            className={`${styles["arrow_swipe"]} ${styles["arrow_swipe--left"]}`}
          >
            <Arrow />
          </div>

          {visibleTechStacks.map((techStack) => (
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
      </div>
    </main>
  );
}

AboutMain.propTypes = {
  techStacks: TechStacks,
};
