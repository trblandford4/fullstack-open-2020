import React, { useState } from "react";

import AnecdoteOfTheDay from "./components/AnecdoteOfTheDay";
import AnecdoteWithMostVotes from "./components/AnecdoteWithMostVotes";

const App = ({ anecdotes }) => {
  // create zero filled array for votes
  const initVotes = anecdotes.map(elem => 0);

  const [selected, setSelected] = useState(0);
  const [mostVotes, setMostVotes] = useState(0);
  const [votes, setVotes] = useState(initVotes);

  const handleNextAnecdote = () => {
    const nextNum = Math.floor(Math.random() * anecdotes.length);
    setSelected(nextNum);
  };

  const handleVote = () => {
    const newVotes = [...votes];
    newVotes[selected]++;
    if (newVotes[selected] > newVotes[mostVotes]) {
      setMostVotes(selected);
    }
    setVotes(newVotes);
  };

  return (
    <>
      <AnecdoteOfTheDay
        anecdote={anecdotes[selected]}
        votes={votes[selected]}
        handleVote={handleVote}
        handleNextAnecdote={handleNextAnecdote}
      />
      <AnecdoteWithMostVotes
        anecdote={anecdotes[mostVotes]}
        votes={votes[mostVotes]}
      />
    </>
  );
};

export default App;
