import styles from "./navbar-hamburger.module.css";

export default function HamBurger({ active = false }) {
  return (
    <div
      className={`${styles["hamburger"]} ${active ? styles["hamburger--active"] : ""}`}
    >
      <div className={styles["hamburger__bar"]} />
      <div className={styles["hamburger__bar"]} />
      <div className={styles["hamburger__bar"]} />
    </div>
  );
}
