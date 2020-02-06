import React from 'react';

const Content = ({courses}) => {
  return courses.map(course => <p> {course.part} {course.exercises} </p>);
}
 
 export default Content;
 