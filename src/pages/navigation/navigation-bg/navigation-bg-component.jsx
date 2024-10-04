import styles from "./navigation-bg.module.css";

export function NavigationPageBG() {
  return (
    <div className={styles["navpage__bg"]}>
      <div className={styles["navpage__bg__section"]}>
        <div className={styles["navpage__bg__section__drop"]} />
        <div className={styles["navpage__bg__section__drop"]} />
        <div className={styles["navpage__bg__section__drop"]} />
      </div>

      <div className={styles["navpage__bg__section"]}>
        <div className={styles["navpage__bg__section__drop"]} />
        <div className={styles["navpage__bg__section__drop"]} />
        <div className={styles["navpage__bg__section__drop"]} />
      </div>

      <div className={styles["navpage__bg__section"]}>
        <div className={styles["navpage__bg__section__drop"]} />
        <div className={styles["navpage__bg__section__drop"]} />
        <div className={styles["navpage__bg__section__drop"]} />
      </div>
    </div>
  );
}
