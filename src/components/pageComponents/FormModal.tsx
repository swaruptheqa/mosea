import { Backdrop, Dialog, DialogContent, SxProps, Theme } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { palette } from "../constants/constants";
import useScreen from "../hooks/useScreen";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { P } from "../typography/headings";

export const BookingModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => {
  //core variables
  const { currentScreen } = useScreen();

  //jsx
  const backIconsx: SxProps<Theme> = {
    mr: "11px",
    position: "absolute",
    top: "15px",
    right: currentScreen === "desktop" ? 0 : "",
    left: currentScreen === "desktop" ? "" : "5px",
    fill: palette.greyscale[25],
    cursor: "pointer",
    ":hover": {
      fill: "#000",
    },
  };

  return (
    <Dialog
      open={isOpen}
      fullScreen={currentScreen === "mobile"}
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: "#6256FFAA",
          },
        },
      }}
      onClose={onClose}
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
      <DialogContent
        sx={{
          height: "70vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {currentScreen === "desktop" ? (
          <CloseIcon sx={backIconsx} onClick={onClose} />
        ) : (
          <ArrowBackIcon sx={backIconsx} onClick={onClose} />
        )}
        <P
          sx={{
            color: palette.primary.indigo,
            width: "100%",
          }}
        >
          {"Birthday Kegger"}
        </P>
      </DialogContent>
    </Dialog>
  );
};
