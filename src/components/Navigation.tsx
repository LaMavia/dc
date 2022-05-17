import { Favorite, People } from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import { Paths } from "../App.routes";

export const Navigation = ({ children }: PropsWithChildren<{}>) => (
  <Box>
    <Box
      style={{
        marginBottom: "10vh",
      }}
    >
      {children}
    </Box>
    <nav
      style={{
        position: "fixed",
        width: "100vw",
        height: "auto",
        zIndex: 10000,
        bottom: 0,
      }}
    >
      <BottomNavigation showLabels value={window.location.pathname}>
        <BottomNavigationAction
          label={"characters"}
          value={Paths.Characters}
          component={Link}
          to={Paths.Characters}
          icon={<People />}
        />
        <BottomNavigationAction
          label={"favourite"}
          value={Paths.Favourite}
          component={Link}
          to={Paths.Favourite}
          icon={<Favorite />}
        />
      </BottomNavigation>
    </nav>
  </Box>
);
