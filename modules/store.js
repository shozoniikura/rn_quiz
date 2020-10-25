import React from 'react';

export let store = init();
export let setStore;
export let score;
export let setScore;

function init() {
  return {
    checked: {},
    correct: {},
    score: null,
  };
}

export function clearStore() {
  setStore(init());
  setScore(store.score);
}

export default function storeRoot() {
  [store, setStore] = React.useState(init());
  [score, setScore] = React.useState(null);
  return store;
}

export function scoreIsAvailable(_score) {
  if (_score == null)
    return false;
  else
    return true;
}