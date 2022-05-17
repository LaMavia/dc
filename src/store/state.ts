import { CharactersState } from "./components/Characters/state";
import { FavouriteCharacterState } from "./components/FavouriteCharacters/state";

export interface State {
  favouriteCharacters: FavouriteCharacterState,
  characters: CharactersState
}