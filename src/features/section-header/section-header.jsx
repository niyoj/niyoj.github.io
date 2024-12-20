import PropTypes from "prop-types";

import { Title } from "@ui";
import Angle from "@assets/images/icons/angle.svg?react";

import styles from "./section-header.module.css";

export function SectionHeader({
  title,
  subtitle = " ",
  description = " ",
  inverse = false,
  visible,
}) {
  return (
    <header
      className={`${styles["section_header"]} ${inverse ? styles["section_header--inverse"] : ""} ${visible ? styles["visible"] : ""}`}
    >
      <div className={styles["section_header--left"]}>
        <Title inverse={inverse} solid={inverse}>
          {title}
        </Title>
        <h1>{subtitle}</h1>
      </div>

      <div className={styles["section_header--right"]}>
        <p>{description}</p>
        <div className={styles["section_header__btn_wrapper"]}>
          <button>
            <Angle height="2rem" fill="#ffffff" />
          </button>
          <button>
            <Angle
              height="2rem"
              fill="#ffffff"
              style={{ transform: "rotateY(-180deg)" }}
            />
          </button>
        </div>
      </div>
    </header>
  );
}

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  inverse: PropTypes.bool,
  visible: PropTypes.bool,
};
