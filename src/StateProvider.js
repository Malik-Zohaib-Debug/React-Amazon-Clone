import React, { createContext, useReducer } from "react";
import AppReducer from "./Reducer";

export const StateContext = createContext();

const initialState = {
  basket: [],
  user: null
};

export default function StateProvider({ children }) {
  let [state, dispatch] = useReducer(AppReducer, initialState);

  function addToBasket(item) {
    dispatch({
      type: "ADD_TO_BASKET",
      payload: item,
    });
  }

  function removeFromBasket(id) {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      payload: id,
    });
  }

  function setUser(newUser){
    dispatch({
      type: "SET_USER",
      payload: newUser
    });
  }

  return (
    <StateContext.Provider
      value={{
        basket: state.basket,
        user: state.user,
        addToBasket,
        removeFromBasket,
        setUser
      }}
    >
      {children}
    </StateContext.Provider>
  );
}
