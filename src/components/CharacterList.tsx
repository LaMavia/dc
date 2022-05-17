import { Grid, Paper, styled } from "@mui/material"
import { Character } from "../api";
import { CharacterCard } from "./CharacterCard";

const Item = styled(Paper)(({ theme }) => ({
  margin: ".5vh",
  borderRadius: "0",
}));

export interface CharacterListProps {
  characters: Character[]
}

export const CharacterList = ({characters}: CharacterListProps) => {
  return (
    <>
      <Grid style={{ width: "100vw" }} container>
        {characters.map((character) => (
          <Item key={character.id} square variant="outlined">
            <CharacterCard character={character} />
          </Item>
        ))}
      </Grid>
    </>
  )
}