import { createAction } from "@reduxjs/toolkit";

export const addFavouriteCharacter = createAction<number>("favourite/character/add")
export const removeFavouriteCharacter = createAction<number>("favourite/character/remove")
