export const initialState = {
  messages: ["hello there"]
};

export function reducer(state, action) {
  console.log(action, state);
  if (action.type === "ADD_MESSAGE") {
    return [...state.messages, action.message];
  } else if (action.type === "DELETE_MESSAGE") {
    return [
      ...state.messages.slice(0, action.index),
      ...state.messages.slice(action.index, state.length)
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
