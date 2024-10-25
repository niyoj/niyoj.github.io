import PropTypes from "prop-types";
import styles from "./portfolio-card.module.css";

export function PortfolioCard({ tags }) {
  return (
    <div className={styles["card"]}>
      <div className={styles["card__cover"]}>
        <div />
        <div className={styles["card__cover__tags"]}>
          {tags.map((item) => (
            <small key="item">{item}</small>
          ))}
        </div>
      </div>
      <div className={styles["card__info"]}>
        <h3>EMIS</h3>
        <small>Information Management System for IOE, Thapathali Campus</small>
      </div>
    </div>
  );
}

PortfolioCard.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};
