import { Backdrop, CircularProgress, Typography } from "@mui/material";

export interface LoaderProps {
  isLoading: boolean;
  title?: string;
}

export const Loader = ({ isLoading, title }: LoaderProps) => (
  <Backdrop open={isLoading} style={{ zIndex: 100 }}>
    <CircularProgress
      color="inherit"
      style={{
        color: "#ffffff",
      }}
    />
    {title && <Typography variant="h5">{title}</Typography>}
  </Backdrop>
);
