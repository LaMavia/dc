import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { RouterProps, useMatch } from "react-router";
import { Character, getCharacter, getCharacters } from "../api";
import { CharacterCard } from "../components/CharacterCard";
import { Loader } from "../components/Loader";

export const CharacterView = (props: {}) => {
  const match = useMatch("/character/:id");
  const [isLoading, setLoading] = useState(true);
  const [character, setCharacter] = useState<Character | null>(null);

  useEffect(() => {
    setLoading(true);
    const id = match?.params.id;

    id &&
      getCharacter(+id)
        .then((r) => {
          setCharacter(r ?? null);
        })
        .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <Box>
        <Loader isLoading={isLoading} />
        {!isLoading &&
          (!match ? (
            <Typography> Invalid path </Typography>
          ) : (
            <>
              {character ? (
                <Grid container>
                  <CharacterCard character={character} />
                </Grid>
              ) : (
                <Typography> Character {match.params.id} not found </Typography>
              )}
            </>
          ))}
      </Box>
    </>
  );
};
