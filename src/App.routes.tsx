import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Characters from "./views/Characters";
import { CharacterView } from "./views/CharacterView";
import { FavouriteCharacters } from "./views/FavouriteCharacters";
import NotFound from "./views/NotFound";

export enum Paths {
  Characters = "/characters",
  Favourite = "/favourite-characters",
  NotFound = "/404",
}

export const AppRoutes = (): React.ReactElement => {
  return (
    <>
      <Routes>
        <Route
          path={Paths.Characters}
          key="characters"
          element={<Characters />}
        />
        <Route
          path={Paths.Favourite}
          key="favourite-characters"
          element={<FavouriteCharacters />}
        />
        <Route
          path="/character/:id"
          key="characters-detail"
          element={<CharacterView />}
        />
        <Route
          path={Paths.NotFound}
          key="notFound/404"
          element={<NotFound />}
        />
        <Route path="*" element={<Navigate replace to={Paths.NotFound} />} />
      </Routes>
    </>
  );
};
