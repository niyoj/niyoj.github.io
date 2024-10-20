import PropTypes from "prop-types";

export const TechStacks = PropTypes.arrayOf(
  PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.arrayOf(PropTypes.string).isRequired,
    rating: PropTypes.oneOf(["beginner", "intermediate", "advance"]).isRequired,
  }),
).isRequired;
