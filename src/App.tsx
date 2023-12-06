import ShareIcon from "@mui/icons-material/Share";
import { Avatar, Stack } from "@mui/material";
import "./App.css";
import { P } from "./components/constants/typography/headings";
import useScreen from "./components/constants/util/hooks/useScreen";
import { palette } from "./components/constants/constants";

function App() {
  const { currentScreen } = useScreen();

  return (
    //Content Container
    <Stack
      sx={{
        flexDirection: currentScreen === "desktop" ? "row" : "column",
        width: "100%",
        height: "100vh",
      }}
    >
      {/* LEFT SIDE IMAGE AND CONTENT*/}
      <Stack
        sx={{
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundImage: "url('/assets/homepage.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: currentScreen === "desktop" ? "cover" : "cover",
          backgroundPosition: "center",
          width: currentScreen === "desktop" ? "67.25%" : "100%",
          height: currentScreen === "desktop" ? "100%" : "30%",
        }}
      >
        {/* TOP LEVEL CONTENT */}
        <Stack
          sx={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            px: "16px",
            py: "20px",
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0.50) 33.77%, rgba(0, 0, 0, 0.00) 100%)",
          }}
        >
          {/* LEFT SIDE CONTENT */}
          <Stack
            sx={{
              flexDirection: "row",
              alignItems: "center",
              gap: "11px",
            }}
          >
            <Avatar alt={"avatar"} src={"/assets/avatar.jpg"}></Avatar>
            <P>{"Marcus Smith and 2 others"}</P>
          </Stack>
          {/* RIGHT SIDE CONTENT */}
          <ShareIcon
            sx={{
              mr: "11px",
              fill: "#fff",
              cursor: "pointer",
              ":hover": {
                fill: palette.greyscale[8],
              },
            }}
          />
        </Stack>
        {/* BOTTOM LEVEL CONTENT */}
        <Stack
          sx={{
            flexDirection: "column",
            justifyContent: "left",
          }}
        ></Stack>
      </Stack>
    </Stack>
  );
}

export default App;
