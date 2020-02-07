import React from 'react';

import Header from './components/Header';
import Content from './components/Content';
import Total from './components/Total';

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  };

  const { name, parts } = course;
  const exercises = parts.map(part => part.exercises);
  return (
    <div>
      <Header courseName={name} />
      <Content parts={parts} />
      <Total exercises={exercises} />
    </div>
  )
}

export default App;