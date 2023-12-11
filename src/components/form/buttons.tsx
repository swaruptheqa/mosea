import { Button } from "@mui/material";
import { palette } from "../constants/constants";
import { ReactNode } from "react";

export const RoundedButton: React.FC<{
  children: ReactNode;
  onClick?: () => void;
  variant: "purple" | "grey";
  width?: string;
}> = ({ children, onClick, variant, width = "100%" }) => {
  return (
    <Button
      sx={{
        width: width,
        px: "24px",
        py: "16px",
        borderRadius: "100px",
        bgcolor:
          variant === "purple" ? palette.primary.indigo : palette.greyscale[3],
        color: variant === "purple" ? "white" : palette.primary.indigo,
        fontSize: "16px",
        fontWeight: 700,
        textTransform: "none",
        ":hover": {
          bgcolor: "#3e33c7",
          color: "white",
        },
      }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
