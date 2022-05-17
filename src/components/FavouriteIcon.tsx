import { FavoriteBorder, FavoriteOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";

export interface FavouriteIconProps {
  style?: React.CSSProperties;
  isFavourite?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const FavouriteIcon = ({
  onClick,
  isFavourite,
  style,
}: FavouriteIconProps) => {
  return (
    <IconButton style={style} onClick={onClick}>
      <FavoriteOutlined
        style={{
          fontSize: "3.5vh",
          fill: isFavourite ? "#db0030" : "#ffffff",
        }}
      />
    </IconButton>
  );
};
