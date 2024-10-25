import PropTypes from "prop-types";

import styles from "./title.module.css";

export function Title({ inverse = false, solid = false, children }) {
  return (
    <small
      className={`${styles["title"]} ${solid ? styles["title--solid"] : ""} ${inverse ? styles["title--inverse"] : ""} `}
    >
      {children}
    </small>
  );
}

Title.propTypes = {
  children: PropTypes.node.isRequired,
  inverse: PropTypes.bool,
  solid: PropTypes.bool,
};
