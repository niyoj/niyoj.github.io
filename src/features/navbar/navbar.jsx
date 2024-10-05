import { Logo } from "@ui";
import { NavigationPage } from "@pages";

import HamBurger from "./navbar-hamburger/navbar-hamburger";

import styles from "./navbar.module.css";
import { useState } from "react";
import { useDelay } from "@ui";

export function Navbar() {
  const [navActive, setNavActive] = useState(false);
  const delayedActive = useDelay(navActive, 1);

  const handleHamburgerClicked = () => {
    setNavActive((prev) => !prev);
  };

  const logoProps = delayedActive
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

      <NavigationPage active={navActive} />
    </>
  );
}
