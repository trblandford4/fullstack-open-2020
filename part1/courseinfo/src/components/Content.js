import React from 'react';

import Part from "./Part";

const Content = ({parts}) => {
  // See: https://reactjs.org/docs/lists-and-keys.html
  // When you don’t have stable IDs for rendered items, you may use the item index as a key as a last resort:
  return parts.map((part, i) => <Part key={i} part={part} />);
}
 
 export default Content;
 