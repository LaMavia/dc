import { styled } from "@mui/material/styles";
import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { RouteProps } from "react-router-dom";
import { Character, getCharacterList } from "../api";
import { CharacterCard } from "../components/CharacterCard";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../store/state";
import { addCharacterPage } from "../store/components/Characters/actions";
import { CharacterList } from "../components/CharacterList";
import { Loader } from "../components/Loader";

interface LocalState {
  characters: Character[];
}

export default function Characters({
  path,
}: RouteProps): React.FunctionComponentElement<RouteProps> {
  const [isLoading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();

  const currentPage = useSelector<State, number>(
    (state) => state.characters.lastPage
  );
  const { characters } = useSelector<State, LocalState>((state) => ({
    characters: Object.values(state.characters.pages).flat(1),
  }));

  const loadNextPage = () => {
    if (isLoading) return;

    const nextPage = currentPage + 1;

    setLoading(true);
    getCharacterList({
      page: nextPage,
    })
      .then((r) => {
        dispatch(addCharacterPage([nextPage, r]));
      })
      .catch((e) => {
        setErrorMessage(String(e));
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    if (characters.length === 0 && !isLoading && !errorMessage) {
      loadNextPage();
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Characters</title>
        <meta name="description" content="" />
      </Helmet>
      <Loader isLoading={isLoading} />
      <CharacterList characters={characters} />
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          flexFlow: "row",
        }}
      >
        <Button
          onClick={() => loadNextPage()}
          disabled={isLoading}
          style={{
            backgroundColor: "#2b2b2b",
            padding: "1% 5%",
            borderRadius: 0,
            margin: "2rem",
            color: "#fefefe",
          }}
        >
          Load more
        </Button>
      </Box>
    </>
  );
}
