import PropTypes from "prop-types";

import styles from "./navigation.module.css";
import styles2 from "./navigation-bg/navigation-bg.module.css";

import { NavigationPageBG } from "./navigation-bg/navigation-bg-component";
import { useDelay } from "@ui";
import { NavigationContent } from "./navigation-content/navigation-content";

const delay = 0.25; // in seconds

export function NavigationPage({ active = true, onNavigate = () => {} }) {
  const showBG = useDelay(active, active ? 0 : delay * 4);
  const showContent = useDelay(active, active ? 0.7 : 0.75);

  return (
    <section
      className={`${styles["navpage"]} ${active ? styles2["navpage--active"] : styles2["navpage--inactive"]}`}
      style={{ "--delay": `${delay}s` }}
    >
      {showBG && <NavigationPageBG />}

      {showContent && (
        <NavigationContent active={active} onNavigate={onNavigate} />
      )}
    </section>
  );
}

NavigationPage.propTypes = {
  active: PropTypes.bool,
  onNavigate: PropTypes.func,
};
