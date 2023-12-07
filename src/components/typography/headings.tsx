import { SxProps, Theme, Typography } from "@mui/material";
import { ReactNode } from "react";
import useScreen from "../hooks/useScreen";

export const H1: React.FC<{ sx: SxProps<Theme>; scheme: "light" | "dark" }> = ({
  sx,
}) => {
  return (
    <Typography variant="h1" sx={{ ...sx, fontSize: "42px" }}></Typography>
  );
};

export const P: React.FC<{ sx?: SxProps<Theme>; children: ReactNode }> = ({
  sx,
  children,
}) => {
  return (
    <Typography
      sx={{
        fontSize: "14px",
        color: "white",
        // fontFamily: "DM Sans",
        fontStyle: "normal",
        fontWeight: 700,
        ...sx,
      }}
    >
      {children}
    </Typography>
  );
};

export const H2: React.FC<{ sx?: SxProps<Theme>; children: ReactNode }> = ({
  sx,
  children,
}) => {
  const { currentScreen } = useScreen();
  return (
    <Typography
      sx={{
        fontSize: currentScreen === "desktop" ? "36px" : "28px",
        color: "white",
        // fontFamily: "DM Sans",
        fontStyle: "normal",
        fontWeight: 700,

        ...sx,
      }}
    >
      {children}
    </Typography>
  );
};
