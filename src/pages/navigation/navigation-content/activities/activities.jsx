import styles from "./activities.module.css";

import Arrow from "../assets/arrow.svg";
import PropTypes from "prop-types";

export function Activities({ items, active = false }) {
  return (
    <div className={styles["menu"]}>
      <small className={styles["menu__title"]}>{"latest activities"}</small>

      <div className={styles["menu__bar"]} />

      <div
        className={`${styles["menu__list"]} ${active ? styles["menu__list--active"] : styles["menu__list--inactive"]}`}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className={styles["menu__list__item"]}
            data-index={index}
          >
            <p className={styles["menu__list__item__title"]}>{item.title}</p>
            <small className={styles["menu__list__item__desc"]}>
              {item.description}
            </small>
          </div>
        ))}

        <small className={styles["menu__list__more"]}>
          <span>More Projects & Blogs</span>
          <img src={Arrow} alt="arrow" />
        </small>
      </div>
    </div>
  );
}

Activities.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
  active: PropTypes.bool,
};