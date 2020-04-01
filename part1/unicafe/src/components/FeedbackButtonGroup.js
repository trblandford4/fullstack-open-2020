import React from "react";

import Button from "./Button";

const FeedbackButtonGroup = ({ buttonProps }) => {
  return (
    <>
      {buttonProps.map((props, i) => (
        <Button key={i} text={props[0]} handleClick={props[1]} />
      ))}
    </>
  );
};

export default FeedbackButtonGroup;
