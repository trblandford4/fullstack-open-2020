import React from 'react';

import Part from "./Part";

const Content = ({courses}) => {
  return courses.map(course => <Part course={course} />);
}
 
 export default Content;
 