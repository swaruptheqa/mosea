import ShareIcon from "@mui/icons-material/Share";
import {
  Avatar,
  Divider,
  LinearProgress,
  Stack,
  Typography,
  linearProgressClasses,
  styled,
} from "@mui/material";
import "./App.css";
import { H2, P } from "./components/typography/headings";
import useScreen from "./components/hooks/useScreen";
import { palette } from "./components/constants/constants";
import { RoundedButton } from "./components/form/buttons";
import { useState } from "react";
import { BookingModal } from "./components/pageComponents/FormModal";

function App() {
  //core variables
  const { currentScreen } = useScreen();

  //state variables
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);

  //jsx
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 9,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: "rgba(255, 255, 255, 0.25)",
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: "#fff",
    },
  }));

  return (
    <>
      {/* //Content Container */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
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
            height: currentScreen === "desktop" ? "100%" : "35%",
          }}
        >
          {/* TOP LEVEL CONTENT */}
          <Stack
            sx={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              pt: "16px",
              pb: "40px",
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
                ml: "16px",
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
              gap: "12px",
              px: "16px",
              pb: "25px",
              pt: currentScreen === "desktop" ? "74px" : "100px",
              background:
                "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 29.42%, rgba(0, 0, 0, 0.70) 99.8%)",
            }}
          >
            <H2>{"Birthday Kegger"}</H2>
            <Stack direction={"row"} sx={{ alignItems: "center", gap: "11px" }}>
              <P sx={{ display: "flex" }}>
                {"$26 "}
                <P sx={{ whiteSpace: "pre", color: palette.greyscale[25] }}>
                  {" of $144"}
                </P>
              </P>
              <BorderLinearProgress
                variant="determinate"
                value={20}
                sx={{
                  width: "100%",
                }}
              />
            </Stack>
          </Stack>
        </Stack>
        {/* RIGHT SIDE CONTENT AND BUTTONS*/}
        <Stack
          sx={{
            width: currentScreen === "desktop" ? "32.75%" : "auto",
            alignItems: "center",
            flexDirection: "column",
            pt: currentScreen === "desktop" ? "24px" : "",
            mx: currentScreen === "desktop" ? "38px" : "",
          }}
        >
          <Stack
            sx={{
              flexDirection: "column",
              width: currentScreen === "desktop" ? "100%" : "auto",
              my: "auto",
              px: "16px",
              py: "24px",
              overflowY: "auto",
              overflowX: "hidden",
            }}
          >
            <IconText
              icon={"/icons/calendar.svg"}
              alt={"start date"}
              text={"Start date: Nov 4, 2023 8:00pm"}
            />
            <IconText
              icon={"/icons/calendar.svg"}
              alt={"end date"}
              text={"End date: Nov 5, 2023 2:00am"}
            />
            <IconText
              icon={"/icons/marker.svg"}
              alt={"address"}
              text={"166 Wyndham Street North, Guelph, ON, Canada"}
            />
            <Divider
              variant="middle"
              sx={{
                width: "100%",
                maxWidth: "305px",
                my: "8px",
                borderBottomWidth: "medium",
                borderColor: palette.greyscale[3],
              }}
            />
            <P
              sx={{
                color: "black",
                whiteSpace: "pre-wrap",
                fontWeight: 400,
              }}
            >
              {longText}
            </P>
          </Stack>
          <Stack
            direction={"column"}
            sx={{
              position: "sticky",
              width: currentScreen === "desktop" ? "100%" : "92%",
              bottom: 0,
              py: "16px",
              gap: "8px",
              bgcolor: "white",
            }}
          >
            <RoundedButton
              variant="purple"
              onClick={() => setIsModalOpen(true)}
            >
              {"Buy tickets"}
            </RoundedButton>
            <RoundedButton variant="grey">{"Use the Mosea app"}</RoundedButton>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}

const IconText: React.FC<{
  icon: string;
  alt: string;
  text: string;
}> = ({ icon, text, alt }) => {
  return (
    <Stack
      sx={{
        flexDirection: "row",
        gap: "8px",
        mb: "12px",
        // maxWidth: "256px",
        lineHeight: "22px",
        alignItems: "flex-start",
      }}
    >
      <img src={icon} alt={alt} style={{ width: "24px" }} />
      <P sx={{ color: "#000", fontWeight: 400 }}>{text}</P>
    </Stack>
  );
};

export default App;

const shortText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id ante ex. Aliquam viverra augue eros, quis porttitor nulla ultricies ac. Aliquam ornare sodales massa, eget consectetur ante eleifend in. Donec malesuada erat non pretium commodo. Curabitur luctus magna at elit aliquam vulputate. Cras eu mattis ipsum. Vestibulum tristique sollicitudin elit, a mollis magna sodales sed. Nullam id nunc eget nisl cursus tristique ac eget sapien. Nullam porttitor sodales diam, eu maximus ipsum commodo ut. Pellentesque vel turpis mi.";

const longText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id ante ex. Aliquam viverra augue eros, quis porttitor nulla ultricies ac. Aliquam ornare sodales massa, eget consectetur ante eleifend in. Donec malesuada erat non pretium commodo. Curabitur luctus magna at elit aliquam vulputate. Cras eu mattis ipsum. Vestibulum tristique sollicitudin elit, a mollis magna sodales sed. Nullam id nunc eget nisl cursus tristique ac eget sapien. Nullam porttitor sodales diam, eu maximus ipsum commodo ut. Pellentesque vel turpis mi. Vivamus consequat faucibus sodales. Nam vehicula, massa in congue ullamcorper, quam tortor faucibus metus, in tempus neque eros in purus. Maecenas scelerisque purus et ante placerat, ut tristique mauris sodales. \nCras lobortis convallis efficitur. Aliquam aliquet metus metus, ac bibendum erat gravida quis. Duis molestie mauris euismod, sollicitudin lacus vel, aliquam enim. Vestibulum condimentum orci a sem posuere maximus. Nullam eget tristique nulla, a porttitor quam. Integer ultricies mauris et nunc pellentesque, vitae tempor ligula varius. Maecenas felis libero, aliquam non magna nec, pellentesque consectetur elit.\nPellentesque ornare ultricies elit sit amet interdum. Integer tortor libero, tincidunt sit amet semper et, viverra ut neque. Suspendisse gravida, justo nec mollis fermentum, nibh diam venenatis erat, in ultrices arcu elit vel nisi. Nulla molestie imperdiet neque. Suspendisse potenti. Cras pretium quis justo non hendrerit. Nulla vitae mauris dictum erat venenatis pulvinar.\nFusce enim risus, consectetur eget ex hendrerit, rhoncus accumsan sapien. In ac congue nibh. Aenean malesuada posuere mi in condimentum. Maecenas non diam eu elit dignissim ullamcorper. Morbi rhoncus non arcu eget mattis. Fusce quis blandit purus. Suspendisse hendrerit sagittis tristique. Nunc vitae velit lectus.\nPellentesque ornare ultricies elit sit amet interdum. Integer tortor libero, tincidunt sit amet semper et, viverra ut neque. Suspendisse gravida, justo nec mollis fermentum, nibh diam venenatis erat, in ultrices arcu elit vel nisi. Nulla molestie imperdiet neque. Suspendisse potenti. Cras pretium quis justo non hendrerit. Nulla vitae mauris dictumf pulvinar.\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id ante ex. Aliquam viverra augue eros, quis porttitor nulla ultricies ac. Aliquam ornare sodales massa, eget consectetur ante eleifend in. Donec malesuada erat non pretium commodo. Curabitur luctus magna at elit aliquam vulputate. Cras eu mattis ipsum. Vestibulum tristique sollicitudin elit, a mollis magna sodales sed. Nullam id nunc eget nisl cursus tristique ac eget sapien. Nullam porttitor sodales diam, eu maximus ipsum commodo ut. Pellentesque vel turpis mi. Vivamus consequat faucibus sodales. Nam vehicula, massa in congue ullamcorper, quam tortor faucibus metus, in tempus neque eros in purus. Maecenas scelerisque purus et ante placerat, ut tristique mauris sodales. \nCras lobortis convallis efficitur. Aliquam aliquet metus metus, ac bibendum erat gravida quis. Duis molestie mauris euismod, sollicitudin lacus vel, aliquam enim. Vestibulum condimentum orci a sem posuere maximus. Nullam eget tristique nulla, a porttitor quam. Integer ultricies mauris et nunc pellentesque, vitae tempor ligula varius. Maecenas felis libero, aliquam non magna nec, pellentesque consectetur elit.\nPellentesque ornare ultricies elit sit amet interdum. Integer tortor libero, tincidunt sit amet semper et, viverra ut neque. Suspendisse gravida, justo nec mollis fermentum, nibh diam venenatis erat, in ultrices arcu elit vel nisi. Nulla molestie imperdiet neque. Suspendisse potenti. Cras pretium quis justo non hendrerit. Nulla vitae mauris dictum erat venenatis pulvinar.\nFusce enim risus, consectetur eget ex hendrerit, rhoncus accumsan sapien. In ac congue nibh. Aenean malesuada posuere mi in condimentum. Maecenas non diam eu elit dignissim ullamcorper. Morbi rhoncus non arcu eget mattis. Fusce quis blandit purus. Suspendisse hendrerit sagittis tristique. Nunc vitae velit lectus.\nPellentesque ornare ultricies elit sit amet interdum. Integer tortor libero, tincidunt sit amet semper et, viverra ut neque. Suspendisse gravida, justo nec mollis fermentum, nibh diam venenatis erat, in ultrices arcu elit vel nisi. Nulla molestie imperdiet neque. Suspendisse potenti. Cras pretium quis justo non hendrerit. Nulla vitae mauris dictumf pulvinar..";
