import React from 'react';

import Header from './components/Header';
import Content from './components/Content';
import Total from './components/Total';

const App = () => {
  const course = 'Half Stack application development'
  
  // Course parts
  const part1 = 'Fundamentals of React'
  const part2 = 'Using props to pass data'
  const part3 = 'State of a component'
  const parts = [part1, part2, part3];  

  // Course exercises
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14
  const exercises = [exercises1, exercises2, exercises3];

  // Created a list of course objects, with part and exercises properties
  // This schema is more similar to a JSON response from an API and 
  // improves reusability. 
  const courses = []
  parts.forEach((part, i) => {
    courses.push({ part, exercises: exercises[i]})
  });

  return (
    <div>
      <Header course={course} />
      <Content courses={courses} />
      <Total exercises={exercises} />
    </div>
  )
}

export default App;