import { Alert, AlertTitle, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import { Character, getCharacters } from "../api";
import { CharacterList } from "../components/CharacterList";
import { Loader } from "../components/Loader";
import { State } from "../store/state";

export const FavouriteCharacters = () => {
  const [isLoading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [characters, setCharacters] = useState<Character[]>([]);

  const favouriteCharacters = useSelector<State, number[]>(
    (state) => state.favouriteCharacters.ids
  );

  useEffect(() => {
    if (characters.length === 0 && !isLoading && favouriteCharacters) {
      setLoading(true);
      getCharacters(favouriteCharacters)
        .then((r) => setCharacters(r.results ?? []))
        .catch((e) => setErrorMessage(e))
        .finally(() => setLoading(false));
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Favourite Characters</title>
        <meta name="description" content="" />
      </Helmet>
      <Loader isLoading={isLoading} />
      {favouriteCharacters ? (
        <CharacterList characters={characters} />
      ) : (
        <Typography variant="h1">No favourite characters</Typography>
      )}
      {errorMessage !== "" && (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          {errorMessage}
        </Alert>
      )}
    </>
  );
};
