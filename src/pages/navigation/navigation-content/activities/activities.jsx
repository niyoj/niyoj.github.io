import styles from "./activities.module.css";

import Arrow from "../assets/arrow.svg";

export function Activities({ items }) {
  return (
    <div className={styles["menu"]}>
      <small className={styles["menu__title"]}>{"activities"}</small>

      <div className={styles["menu__bar"]} />

      <div className={styles["menu__list"]}>
        {items.map((item, index) => (
          <div key={index} className={styles["menu__list__item"]}>
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
