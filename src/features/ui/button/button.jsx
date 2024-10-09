import PropTypes from "prop-types";
import styles from "./button.module.css";

export function Button({ children, className = [], ...props }) {
  return (
    <button
      className={`${styles["button"]} ${Array.isArray(className) ? className.join(" ") : className}`}
      {...props}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
};
