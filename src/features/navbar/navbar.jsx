import { Logo } from "@ui";
import HamBurger from "./navbar-hamburger/navbar-hamburger";

import styles from "./navbar.module.css";
import { useState } from "react";

export function Navbar() {
  const [navActive, setNavActive] = useState(false);

  const handleHamburgerClicked = () => {
    setNavActive((prev) => !prev);
  };

  return (
    <nav className={styles["navbar"]}>
      <Logo />

      <button onClick={handleHamburgerClicked}>
        <HamBurger active={navActive} />
      </button>
    </nav>
  );
}
