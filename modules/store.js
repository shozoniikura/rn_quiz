let _store;
clearStore();

export function clearStore() {
  _store = {
    score: null,
    checked: {},
  };
}

export default function store() {
  return _store;
}