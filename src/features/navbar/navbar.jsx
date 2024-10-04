import { Logo } from "@ui";
import HamBurger from "./navbar-hamburger/navbar-hamburger";

import styles from "./navbar.module.css";

export function Navbar() {
  return (
    <nav className={styles["navbar"]}>
      <Logo /> <HamBurger/>
    </nav>
  );
}
