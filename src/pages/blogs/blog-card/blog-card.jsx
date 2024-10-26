import PropTypes from "prop-types";
import styles from "./blog-card.module.css";

export function BlogCard({ title, description, publishedDate, readTime }) {
  return <p>blog</p>;
}

BlogCard.propTypes = {
  readTime: PropTypes.number,
  publishedDate: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
