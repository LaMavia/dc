import { FavoriteBorder, FavoriteOutlined } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Icon,
  makeStyles,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Character } from "../api";
import {
  addFavouriteCharacter,
  removeFavouriteCharacter,
} from "../store/components/FavouriteCharacters/actions";
import { State } from "../store/state";
import { FavouriteIcon } from "./FavouriteIcon";
import { GenderIcon } from "./GenderIcon";

export interface CharacterCardProps {
  character: Character;
}

export const CharacterCard = ({ character }: CharacterCardProps) => {
  const isFavourite = useSelector<State, boolean>((state) =>
    state.favouriteCharacters.ids.includes(character.id)
  );
  const dispatch = useDispatch();

  const onClick = () => {
    if (isFavourite) {
      dispatch(removeFavouriteCharacter(character.id));
    } else {
      dispatch(addFavouriteCharacter(character.id));
    }
  };

  return (
    <>
      <Card>
        <Box position="relative">
          <NavLink
            to={`/character/${character.id}`}
            style={{
              color: "#2b2b2b",
              textDecoration: "none",
            }}
          >
            <CardActionArea>
              <CardMedia component="img" image={character.image} />
            </CardActionArea>
          </NavLink>
          <FavouriteIcon
            isFavourite={isFavourite}
            style={{
              fontSize: "3.5vh",
              position: "absolute",
              right: "2%",
              bottom: "2%",
              zIndex: 5,
            }}
            onClick={onClick}
          />
        </Box>
        <CardContent>
          <Stack component="div">
            <Typography variant="body1">{character.name}</Typography>
            <GenderIcon
              gender={character.gender}
              style={{ fontSize: "2.5vh" }}
            />
          </Stack>
        </CardContent>
      </Card>
    </>
  );
};
