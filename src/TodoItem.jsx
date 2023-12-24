import React from "react";
import PropTypes from "prop-types";

const TodoItem = ({ todo, index }) => {
  return (
    <>
      <li>{todo}</li>
    </>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default TodoItem;
