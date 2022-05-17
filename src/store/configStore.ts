import { configureStore, Store } from "@reduxjs/toolkit";
import { rootReducer } from "./reducer";
import { State } from "./state";

export const initStore = (): Store<State> =>
  configureStore({
    reducer: rootReducer,
  });
