import PropTypes from "prop-types";
import { getLink } from "@data";

import Arrow from "@assets/images/icons/arrow-right.svg?react";

import styles from "./portfolio-card.module.css";

export function PortfolioCard({ title, name, link = getLink("github") }) {
  return (
    <div className={styles["card__wrapper"]}>
      <a href={link} target="_blank">
        <div
          className={styles["card"]}
          style={{ backgroundImage: `url(/projects/${name}.png)` }}
        >
          <p>{title}</p>
        </div>

        <div className={styles["card__arrow"]}>
          <div className={styles["card__arrow__wrapper"]}>
            <Arrow />
          </div>
        </div>
      </a>
    </div>
  );
}

PortfolioCard.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  link: PropTypes.string,
};
