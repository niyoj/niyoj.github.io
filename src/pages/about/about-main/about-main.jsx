import { useState } from "react";

import styles from "./about-main.module.css";

import { TechStacks } from "../prop-types";
import { FilterTech } from "../filter-tech/filter-tech";
import { ToolsDisplay } from "../tools-display/tools-display";

export function AboutMain({ techStacks = [] }) {
  const [filtered, setFiltered] = useState([]);

  const categories = techStacks
    .map((techStack) => techStack.category)
    .flat()
    .filter((item, index, arr) => arr.indexOf(item) === index);

  const visibleTechStacks =
    filtered.length === 0
      ? techStacks
      : techStacks.filter((item) =>
        item.category.some((element) => filtered.includes(element)),
      );

  const handleFilterChange = (name, checked) => {
    if (checked) {
      setFiltered((prev) => [name, ...prev]);
    } else {
      setFiltered((prev) => prev.filter((item) => item !== name));
    }
  };

  return (
    <main className={styles["about__main"]}>
      <FilterTech categories={categories} onFilterChange={handleFilterChange} />

      <div className={styles["about__main__display--container"]}>
        <ToolsDisplay tools={visibleTechStacks} />
      </div>
    </main>
  );
}

AboutMain.propTypes = {
  techStacks: TechStacks,
};
