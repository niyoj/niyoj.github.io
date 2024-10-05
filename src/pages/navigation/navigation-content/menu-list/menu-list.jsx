import styles from "./menu-list.module.css";

export function MenuList({ title, items, active = false }) {
  return (
    <div
      className={`${styles["menu"]} ${active ? styles["menu--active"] : styles["menu--inactive"]}`}
    >
      <small className={styles["menu__title"]}>{title ?? ""}</small>

      <div className={styles["menu__bar"]} />

      <div className={styles["menu__list"]}>
        {items.map((item, index) => (
          <a
            key={index}
            href={`#${item}`}
            className={styles["menu__list__item"]}
          >
            <h1 data-text={item}>{item}</h1>
          </a>
        ))}
      </div>
    </div>
  );
}
