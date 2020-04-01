import React, { useState } from "react";

import Title from "../components/Title";

const AnecdoteOfTheDay = ({
  anecdote,
  votes,
  handleVote,
  handleNextAnecdote
}) => {
  return (
    <>
      <Title text="Anecdote of the day" />
      <div>{anecdote}</div>
      <div>has {votes} votes</div>
      <button onClick={handleVote}>vote</button>
      <button onClick={handleNextAnecdote}>next anecdote</button>
    </>
  );
};

export default AnecdoteOfTheDay;
