import { Character } from "../../../api";

export interface CharactersState {
  totalPages: number,
  lastPage: number,
  pages: {
    [page: number]: Character[]
  }
}