import styles from "./navigation.module.css";

export function NavigationPage() {
  return (
    <section className={styles["navpage"]}>
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
    </section>
  );
}
