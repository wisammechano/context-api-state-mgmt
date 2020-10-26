import { createContext, useReducer, useCallback } from "react";

// First step is to creat the context and export it
// It's the most imported object in all your compnents
// hence I love to export it as default
const StateContext = createContext({});

export default StateContext;

// Here we create our initial state, it is simple. We only have the user
const initState = {
  user: null,
};

// Actions, usually defined in another file, they are merely used to avoid typos in action types throughout our code
const actions = {
  SET_USER: "set_user",
};

// Our reducer, is a function that takes the state and an action
function reducer(state, action) {
  // Every action we dispatch, will pass through this reducer
  // We switch the action type to know what was dispatched and then reduce our state accordingly
  switch (action.type) {
    case actions.SET_USER:
      // always remember to copy the old state, and overwrite the required state data
      // Here, we want our old state, but we want to only change the user to the dispatched value
      return { ...state, user: action.data };

    // Default should always be add, in case we use multiple reducers, we just return the old state (WITHOUT CHANGE)
    default:
      return state;
  }
}

// Here we will construct our state provider, it will be the parent component that provides the state
// We can have different contexts, different providers, but for this app we will wrap everything with this provider
export function StateProvider({ children }) {
  // So far, we've only created initial state, and a reducer function
  // React, out of the box, offers the useReducer hook. That take our reducer function, and initial state
  // And provide us with a live state, and a dispatch function
  const [state, dispatch] = useReducer(reducer, initState);

  // We can merely set our Provider value to [state, dispatch] and dispatch our actions on the spot
  // But for more clarity, I like to create methods that dispatch the intended actions. This is a preference only
  const value = {
    ...state,
    // methods
    // We wrap the methods with useCallback. Remember that this object will be recreated on every render
    // Which means the equality check will fail even if state hasn't changed.
    // It would fail because the method is created again and doesn't equal the old method
    // That's why useCallback will keep this function unchanged in future renders
    // If this function need to be created again if it is dependant on values, make sure to fill the dependency list
    setUser: useCallback((user) => {
      dispatch({ type: actions.SET_USER, data: user });
    }, []),
  };

  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
}
