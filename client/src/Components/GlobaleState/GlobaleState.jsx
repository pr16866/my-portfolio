import React from 'react'
import { createGlobalState } from "react-hooks-global-state";

const initialState = {
  projects: [],
};

const { useGlobalState, setGlobalState } = createGlobalState(initialState);

export { useGlobalState, setGlobalState };