import { createReducer } from "@reduxjs/toolkit";
import { addFavouriteCharacter, removeFavouriteCharacter } from "./actions";
import { FavouriteCharacterState } from "./state";

const DEFAULT_STATE: FavouriteCharacterState = {
  ids: [],
};

export const favouriteCharacterReducer = createReducer(
  DEFAULT_STATE,
  (builder) =>
    builder
      .addCase(addFavouriteCharacter, (state, action) => {
        if (!state.ids.includes(action.payload)) state.ids.push(action.payload);
      })
      .addCase(removeFavouriteCharacter, (state, action) => {
        state.ids = state.ids.filter((id) => id !== action.payload);
      })
);
