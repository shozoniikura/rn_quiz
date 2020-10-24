let _store;
clearStore();

export function clearStore() {
  _store = {
    checked: {},
  };
}

export default function store() {
  return _store;
}