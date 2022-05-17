import { createReducer } from "@reduxjs/toolkit";
import { addCharacterPage } from "./actions";
import { CharactersState } from "./state";

const DEFAULT_STATE: CharactersState = {
  lastPage: 0,
  totalPages: 0,
  pages: {},
};

export const characterReducer = createReducer(DEFAULT_STATE, (builder) =>
  builder.addCase(addCharacterPage, (state, { payload: [page, data] }) => {
    state.lastPage = Math.max(state.lastPage, page);
    state.totalPages = data.info?.pages ?? state.totalPages;
    state.pages[page] = data.results ?? [];
  })
);
