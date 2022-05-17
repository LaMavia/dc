import { ApiResponse, API_URL, Info, Paginated, ResourceBase } from "./base";

export interface CharacterLocation {
  name: string;
  url: string;
}

export enum CharacterStatus {
  Dead = "Dead",
  Alive = "Alive",
  Unknown = "unknown",
}

export enum CharacterGender {
  Female = "Female",
  Male = "Male",
  Genderless = "Genderless",
  Unknown = "unknown",
}

export interface Character extends ResourceBase {
  status: CharacterStatus;
  species: string;
  type: string;
  gender: CharacterGender;
  origin: CharacterLocation;
  location: CharacterLocation;
  image: string;
  episode: string[];
}

export interface CharacterFilter {
  name: string;
  status: CharacterStatus;
  species: string;
  type: string;
  gender: CharacterGender;
}

export const getCharacterList = (
  args: Partial<Paginated<CharacterFilter>>
): Promise<Info<Character[]>> => {
  const urlQuery = Object.entries(args)
    .map(([k, v]) => `${k}=${encodeURIComponent(v)}`)
    .join("&");

  return fetch(`${API_URL}/character/?${urlQuery}`)
    .then((r) => r.json())
    .then((r: Info<Character[]>) => r);
};

export const getCharacters = (ids: number[]): Promise<Info<Character[]>> =>
  fetch(`${API_URL}/character/${encodeURIComponent(ids.join(","))}`)
    .then((r) => r.json())
    .then((r: Info<Character[]>) => r);

export const getCharacter = (id: number): Promise<Character> =>
  fetch(`${API_URL}/character/${encodeURIComponent(id)}`)
    .then((r) => r.json())
    .then((r: Character) => r);