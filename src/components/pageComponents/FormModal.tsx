import {
  Backdrop,
  Dialog,
  DialogContent,
  Stack,
  SxProps,
  Theme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { palette } from "../constants/constants";
import useScreen from "../hooks/useScreen";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { P } from "../typography/headings";
import { TicketForm } from "./TicketForm";

export const BookingModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => {
  //core variables
  const { currentScreen } = useScreen();

  //jsx
  const backIconsx: SxProps<Theme> = {
    zIndex: 1,
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
      maxWidth={"xl"}
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
          maxHeight: currentScreen === "desktop" ? "75vh" : "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "0px",
          overflowY: "hidden",
        }}
      >
        {currentScreen === "desktop" ? (
          <CloseIcon sx={backIconsx} onClick={onClose} />
        ) : (
          <ArrowBackIcon sx={backIconsx} onClick={onClose} />
        )}
        <Stack
          direction={"column"}
          sx={{
            alignItems: "center",
            width: currentScreen === "desktop" ? "50vw" : "100%",
            maxWidth: "460px",
            marginX: currentScreen === "desktop" ? "20px" : "",
            marginTop: "20px",
            backgroundColor: "white",
          }}
        >
          <P
            sx={{
              color: palette.primary.indigo,
              width: "100%",
              textAlign: "center",
              position: "sticky",
              top: 20,
              backgroundColor: "white",
            }}
          >
            {"Birthday Kegger"}
          </P>
          <P
            sx={{
              color: "#00000080",
              fontSize: "12px",
              fontWeight: 400,
              width: "100%",
              textAlign: "center",
              position: "sticky",
              top: 42,
              backgroundColor: "white",
            }}
          >
            {"Nov 4, 2023 8:00pm - Nov 5, 2023 2:00am"}
          </P>
          <TicketForm />
        </Stack>
      </DialogContent>
    </Dialog>
  );
};
