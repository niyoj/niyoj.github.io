import { Logo } from "@ui";
import { NavigationPage } from "@pages";

import HamBurger from "./navbar-hamburger/navbar-hamburger";

import styles from "./navbar.module.css";
import { useState } from "react";

export function Navbar() {
  const [navActive, setNavActive] = useState(false);

  const handleHamburgerClicked = () => {
    setNavActive((prev) => !prev);
  };

  const logoProps = navActive
    ? { type: "icon", inverse: true }
    : { type: "default", inverse: false };

  return (
    <>
      <nav className={styles["navbar"]}>
        <Logo {...logoProps} />

        <button onClick={handleHamburgerClicked}>
          <HamBurger active={navActive} />
        </button>
      </nav>

      {navActive && <NavigationPage />}
    </>
  );
}
