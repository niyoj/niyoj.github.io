import { useState } from "react";

import styles from "./about-main.module.css";

import { Tools } from "../prop-types";
import { FilterTech } from "../filter-tech/filter-tech";
import { ToolsDisplay } from "../tools-display/tools-display";
import PropTypes from "prop-types";

export function AboutMain({ tools = [] }) {
  const [filtered, setFiltered] = useState([]);

  const categories = tools
    .map((tool) => tool.category)
    .flat()
    .filter((item, index, arr) => arr.indexOf(item) === index);

  // if no filter chips selected then show all else filter and show
  const visibleTools =
    filtered.length === 0
      ? tools
      : tools.filter((item) =>
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
        <ToolsDisplay tools={visibleTools} />
      </div>
    </main>
  );
}

AboutMain.propTypes = {
  tools: PropTypes.arrayOf(Tools),
};
