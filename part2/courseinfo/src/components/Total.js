import React from "react";

const Total = ({ exercises }) => {
  const total = exercises.reduce((a, b) => a + b, 0);
  return <strong>Total of {total} exercises</strong>;
};

export default Total;
