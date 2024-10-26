import PropTypes from "prop-types";
import styles from "./blog-card.module.css";

export function BlogCard({ title, description, publishedDate, readTime }) {
  // in DD Mon YYYY format
  const dateString = new Date(publishedDate).toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });

  return (
    <div className={styles["blog"]}>
      <div className={styles["blog__meta"]}>
        <p>{readTime} Mins Read</p>
        <small>{dateString}</small>
      </div>

      <div className={styles["blog__info"]}>
        <h3>{title}</h3>
        <small>{description}</small>
      </div>
    </div>
  );
}

BlogCard.propTypes = {
  readTime: PropTypes.number,
  publishedDate: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
