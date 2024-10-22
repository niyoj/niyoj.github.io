import { Chips } from "@ui";

import styles from "./filter-tech.module.css";
import PropTypes from "prop-types";

export function FilterTech({ categories, onFilterChange }) {
  return (
    <div className={styles["filter"]}>
      <small>Filter tools by category</small>

      <div className={styles["filter__list"]}>
        {categories.map((item, index) => (
          <Chips key={index} onChange={onFilterChange.bind(null, item)}>
            {item}
          </Chips>
        ))}
      </div>
    </div>
  );
}

FilterTech.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  onFilterChange: PropTypes.func.isRequired,
};
