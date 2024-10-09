import { Logo } from "@ui";
import { NavigationPage } from "@pages";

import HamBurger from "./navbar-hamburger/navbar-hamburger";

import styles from "./navbar.module.css";
import { useState } from "react";
import { useDelay } from "@ui";

export function Navbar() {
  const [navActive, setNavActive] = useState(false);

  const delayLogo = useDelay(navActive, navActive ? 0.6 : 0.3);
  const delayedActive = useDelay(navActive, 0.9);

  // temporary fix
  const delayedNavActive = useDelay(navActive, navActive ? 0 : 1);

  const handleHamburgerClicked = () => {
    setNavActive((prev) => !prev);
  };

  const logoProps = delayLogo
    ? { type: "icon", inverse: true }
    : { type: "default", inverse: false };

  return (
    <>
      <nav className={styles["navbar"]}>
        <Logo {...logoProps} />

        <button onClick={handleHamburgerClicked}>
          <HamBurger active={delayedActive} />
        </button>
      </nav>

      {delayedNavActive && <NavigationPage active={navActive} />}
    </>
  );
}
