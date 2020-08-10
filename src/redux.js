export const initialState = {
  messages: []
};

export function reducer(state, action) {
  if (action.type === "ADD_MESSAGE") {
    return {
      state,
      messages: [...state.messages, action.message]
    };
  } else if (action.type === "DELETE_MESSAGE") {
    return {
      state,
      messages: [...state.messages.filter((message, i) => action.index !== i)]
    };
  } else {
    return state;
  }
}

// export function createStore(reducer) {
//   let state = [];
//   let listeners = [];

//   const subscribe = (listener) => listeners.push(listener);

//   const getState = () => state;

//   const dispatch = (action) => {
//     state = reducer(state, action);
//     listeners.map((l) => l());
//   };

//   return {
//     getState,
//     subscribe,
//     dispatch
//   };
// }
