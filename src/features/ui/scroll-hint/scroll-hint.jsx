import PropTypes from "prop-types";
import styles from "./scroll-hint.module.css";

export function ScrollHint({ className = "" }) {
  return (
    <div className={`${styles["scroll_wrapper"]} ${className}`}>
      <div className={styles["scroll"]}>
        <div className={styles["scroll__thumb"]} />
      </div>
      <small style={{ color: "#D4C6E7" }}>scroll</small>
    </div>
  );
}

ScrollHint.propTypes = {
  className: PropTypes.string,
};
