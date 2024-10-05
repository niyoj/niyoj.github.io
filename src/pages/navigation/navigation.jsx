import styles from "./navigation.module.css";
import styles2 from "./navigation-bg/navigation-bg.module.css";

import { NavigationPageBG } from "./navigation-bg/navigation-bg-component";
import { useDelay } from "@ui";

const delay = 0.25; // in seconds

export function NavigationPage({ active = true }) {
  const showBG = useDelay(active, delay*4);

  return (
    <section
      className={`${styles["navpage"]} ${active ? styles2["navpage--active"] : styles2["navpage--inactive"]}`}
      style={{ "--delay": `${delay}s` }}
    >
      {showBG && <NavigationPageBG />}

      <main className={styles["navpage__main"]}>
        <div className={styles["navpage__main__top"]}></div>

        <div className={styles["navpage__main__bottom"]}>
          <p> Designed and developed by Niyoj</p>
        </div>
      </main>
    </section>
  );
}
