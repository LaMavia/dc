import { createAction } from "@reduxjs/toolkit";
import { Character, Info } from "../../../api";

export const addCharacterPage = createAction<[number, Info<Character[]>]>("character/page/add");
