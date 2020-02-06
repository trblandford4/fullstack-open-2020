import React from 'react';

import Part from "./Part";

const Content = ({courses}) => {

  // See: https://reactjs.org/docs/lists-and-keys.html
  // When you don’t have stable IDs for rendered items, you may use the item index as a key as a last resort:
  return courses.map((course, i) => <Part key={i} course={course} />);
}
 
 export default Content;
 