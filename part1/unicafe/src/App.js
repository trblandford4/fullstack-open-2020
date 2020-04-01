import React, { useState } from "react";

import Title from "./components/Title";
import FeedbackButtonGroup from "./components/FeedbackButtonGroup";
import Statistics from "./components/Statistics";

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // Should ideally use objects to pass data to child components
  // to improve reusability, but given strict requirements using
  // an array is acceptable for simplicity.
  return (
    <div>
      <Title text="give feedback" />
      <FeedbackButtonGroup
        buttonProps={[
          ["good", () => setGood(good + 1)],
          ["neutral", () => setNeutral(neutral + 1)],
          ["bad", () => setBad(bad + 1)]
        ]}
      />
      <Title text="statistics" />
      <Statistics stats={[good, neutral, bad]} />
    </div>
  );
};

export default App;
