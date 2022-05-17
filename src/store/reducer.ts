import { characterReducer } from "./components/Characters/reducer";
import { favouriteCharacterReducer } from "./components/FavouriteCharacters/reducer";

export const rootReducer = {
  favouriteCharacters: favouriteCharacterReducer,
  characters: characterReducer
};
