import PropTypes from "prop-types";

export const Tools = PropTypes.shape({
  name: PropTypes.string.isRequired,
  category: PropTypes.arrayOf(PropTypes.string).isRequired,
  rating: PropTypes.oneOf(["beginner", "intermediate", "advance"]).isRequired,
}).isRequired;
