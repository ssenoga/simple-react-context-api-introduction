export const initialState = {
  messages: ["hello there"]
};

export function reducer(state, action) {
  if (action.type === "ADD_MESSAGE") {
    return [...state, action.message];
  } else if (action.type === "DELETE_MESSAGE") {
    return [
      ...state.slice(0, action.index),
      ...state.slice(action.index, state.length)
    ];
  }
}

export function createStore(reducer) {
  let state = [];
  let listeners = [];

  const subscribe = (listener) => listeners.push(listener);

  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.map((l) => l());
  };

  return {
    getState,
    subscribe,
    dispatch
  };
}
