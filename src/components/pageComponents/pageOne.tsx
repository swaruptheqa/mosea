import { Divider, MenuItem, Select, Stack } from "@mui/material";
import { ticketType } from "../constants/types";
import { longText } from "../../App";
import { RoundedButton } from "../form/buttons";
import useScreen from "../hooks/useScreen";
import { palette } from "../constants/constants";
import { P } from "../typography/headings";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export const PageOne: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  //core variables
  const { currentScreen } = useScreen();
  return (
    <Stack direction={"column"} sx={{ width: "100%" }}>
      {/* {longText} */}
      {tickets.map((ticket, index) => {
        return (
          <>
            {/* *outer container */}
            <Stack
              direction={"row"}
              sx={{ justifyContent: "space-between", m: "24px" }}
            >
              {/* left side of content */}
              <Stack direction={"column"} sx={{ width: "100%" }}>
                <P
                  sx={{
                    color: "black",
                    fontSize: "16px",
                    fontWeight: 500,
                  }}
                >
                  {ticket.title}
                </P>
                <P
                  sx={{
                    color: palette.primary.indigo,
                    fontsize: "16px",
                    fontWeight: 500,
                  }}
                >
                  {"$" + ticket.price}
                </P>
                <P
                  sx={{
                    color: "#555759",
                    fontSize: "14px",
                    fontWeight: 400,
                  }}
                >
                  {ticket.description}
                </P>
              </Stack>
              {/* right side dropdown */}
              <Select
                value={ticket.available}
                variant="filled"
                IconComponent={KeyboardArrowDownIcon}
                style={{
                  height: "30px",
                }}
                sx={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {Array.from({ length: ticket.available }, (_, index) => (
                  <MenuItem value={index + 1}>{index + 1}</MenuItem>
                ))}
              </Select>
            </Stack>
            <Divider
              variant="middle"
              sx={{
                width: "100%",
                maxWidth: "90vw",
                my: "8px",
                borderBottomWidth: "medium",
                borderColor: palette.greyscale[3],
              }}
            />
          </>
        );
      })}
      <Stack
        direction={"column"}
        sx={{
          position: "sticky",
          width: currentScreen === "desktop" ? "100%" : "100%",
          bottom: 0,
          pt: "16px",
          pb: "20px",
          // px: currentScreen === "desktop" ? "" : "16px",
          alignItems: "center",
          bgcolor: "white",
        }}
      >
        <RoundedButton variant="purple" onClick={onNext} width={currentScreen === "desktop" ? "100%" : "92%"}>
          {"Next"}
        </RoundedButton>
      </Stack>
    </Stack>
  );
};

const tickets: ticketType[] = [
  {
    title: "Early Bird",
    description: "This is a little description of what is included",
    price: "15",
    available: 3,
  },
  {
    title: "General Admission",
    description: "This is a little description of what is included",
    price: "32",
    available: 2,
  },
  {
    title: "Early Bird",
    description: "This is a little description of what is included",
    price: "15",
    available: 1,
  },
  {
    title: "Early Bird",
    description: "This is a little description of what is included",
    price: "15",
    available: 3,
  },
  {
    title: "General Admission",
    description: "This is a little description of what is included",
    price: "32",
    available: 2,
  },
  {
    title: "Early Bird",
    description: "This is a little description of what is included",
    price: "15",
    available: 1,
  },
];
