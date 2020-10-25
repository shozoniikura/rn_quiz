import React from 'react';

export let store = init();
export let setStore;

function init() {
  return {
    checked: {},
    correct: {},
    score: null,
  };
}

export function clearStore() {
  setStore(init());
}

export default function storeRoot() {
  [store, setStore] = React.useState(init());
  return store;
}