import { useState } from "react";
import PropTypes from "prop-types";

import Check from "@assets/images/icons/check.svg?react";

import styles from "./chips.module.css";

export function Chips({ children, onChange = () => {} }) {
  const [checked, setChecked] = useState(false);

  const handleChipsClicked = () => {
    setChecked((prev) => !prev);
    onChange(!checked);
  };

  return (
    <div
      className={`${styles["chips"]} ${checked ? styles["chips--active"] : styles["chips--inactive"]}`}
    >
      <label>
        <input type="checkbox" onChange={handleChipsClicked} />
        {checked && <Check />}
        <small>{children}</small>
      </label>
    </div>
  );
}

Chips.propTypes = {
  children: PropTypes.node.isRequired,
  onChange: PropTypes.func,
};
