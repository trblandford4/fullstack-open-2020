import React, { useState } from "react";

import Title from "../components/Title";

const AnecdoteWithMostVotes = ({ anecdote, votes }) => {
  return (
    <>
      <Title text="Anecdote with the most votes" />
      <div>{anecdote}</div>
      <div>has {votes} votes</div>
    </>
  );
};

export default AnecdoteWithMostVotes;
