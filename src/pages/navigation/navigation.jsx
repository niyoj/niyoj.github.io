import { useEffect, useState } from "react";

import styles from "./navigation.module.css";
import styles2 from "./navigation-bg/navigation-bg.module.css";

import { NavigationPageBG } from "./navigation-bg/navigation-bg-component";

const delay = 0.25; // in seconds

export function NavigationPage({ active = true }) {
  const [showBG, setShowBG] = useState(false);

  useEffect(() => {
    if (active) {
      setShowBG(true);
      return;
    }

    // if the state becomes inactive then wait for some seconds for the animation
    const timeout = setTimeout(() => setShowBG(false), delay * 1000 * 4);

    return () => clearTimeout(timeout);
  }, [active]);

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
