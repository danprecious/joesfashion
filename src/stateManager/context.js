"use client";

import React, { createContext, useState, useReducer } from "react";
import { reducer } from "./reducer";

export const GlobalState = React.createContext();

export const GlobalStateProvider = ({ children }) => {
  const defaultState = {
    toggleNav: false,
  };

  const [state, dispatch] = useReducer(reducer, defaultState);

  return <GlobalState.Provider value={{state, dispatch}}>{children}</GlobalState.Provider>;
};


