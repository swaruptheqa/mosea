import { Divider, MenuItem, Select, Stack } from "@mui/material";
import { H2, P } from "../typography/headings";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { palette } from "../constants/constants";
import { RoundedButton } from "../form/buttons";
import useScreen from "../hooks/useScreen";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export const PageTwo: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  //core variables
  const { currentScreen } = useScreen();
  const ChevronSx = { color: palette.primary.indigo };
  //state variables
  const [showSummary, setShowSummary] = useState(false);
  const [formSection, setFormSection] = useState<
    "phone" | "otp" | "information" | "confirmation"
  >("phone");

  return (
    <>
      {/* OUTER CONTAINER */}
      <Stack
        direction={"column"}
        sx={{
          width: currentScreen === "desktop" ? "100%" : "auto",
          gap: "16px",
          p: currentScreen === "desktop" ? "" : "16px",
        }}
      >
        {/* TICKET SUMMARY HEADING */}
        <Stack direction={"row"} justifyContent={"space-between"}>
          <P
            sx={{
              color: "black",
              fontSize: "18px",
              fontWeight: 700,
            }}
          >
            {"Ticket Summary"}
          </P>
          <Stack
            direction={"row"}
            sx={{
              cursor: "pointer",
              alignItems: "center",
            }}
            onClick={() => setShowSummary((prev) => !prev)}
          >
            <P
              sx={{
                color: palette.primary.indigo,
                fontSize: "12px",
                fontWeight: 400,
              }}
            >
              {"Details"}
            </P>
            <ExpandLessIcon
              sx={{
                color: palette.primary.indigo,
                transform: showSummary ? "" : "rotate(-180deg)",
                transition: "all 0.2s",
              }}
            />
          </Stack>
        </Stack>

        {/* DETAILS PANEL */}
        <Stack
          direction={"column"}
          gap={"5px"}
          sx={{
            height: showSummary ? "100%" : "0px",
            overflow: "hidden",
            transition: "all 0.2s",
          }}
        >
          {ticketSummary.map((ticket, index) => (
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              sx={{
                p: "10px",
                borderRadius: "5px",
                border: "2px solid var(--grey-6, #F1F2F2)",
                background: "#FFF",
              }}
            >
              <P
                sx={{
                  color: palette.greyscale[50],
                  width: "60%",
                  fontSize: "14px",
                  fontWeight: 400,
                }}
              >
                {ticket.title}
              </P>
              <P
                sx={{
                  color: palette.primary.indigo,
                  fontSize: "16px",
                  fontWeight: 500,
                }}
              >
                {ticket.quantity}
              </P>
              <P
                sx={{
                  color: palette.greyscale[100],
                  fontSize: "14px",
                  fontWeight: 400,
                }}
              >
                {ticket.price}
              </P>
            </Stack>
          ))}
        </Stack>

        {/* TOTAL COST PANEL */}
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          sx={{
            px: "13px",
            py: "9px",
            bgcolor: "#EFEEFF",
          }}
        >
          <P
            sx={{
              color: palette.primary.indigo,
              fontSize: "16px",
              fontWeight: 500,
            }}
          >
            {"3 tickets"}
          </P>
          <P
            sx={{
              color: "#000",
              fontSize: "14px",
              fontWeight: 400,
            }}
          >
            {"$96.00"}
          </P>
        </Stack>

        {/* INFORMATION FORM SECTION */}
        {formSection === "phone" && PhoneSection}
        {formSection === "otp" && OTPSection}
        {formSection === "information" && InformationSection}
        {formSection === "confirmation" && ConfirmationSection}

        {/* NEXT BUTTON */}
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
          <RoundedButton
            variant="purple"
            onClick={() => {
              formSection === "phone"
                ? setFormSection("otp")
                : formSection === "otp"
                ? setFormSection("information")
                : formSection === "information"
                ? setFormSection("confirmation")
                : formSection === "confirmation"
                ? onNext()
                : onNext();
            }}
            // width={currentScreen === "desktop" ? "100%" : "92%"}
          >
            {"Next"}
          </RoundedButton>
        </Stack>
      </Stack>
    </>
  );
};

const InformationItem: React.FC<{ label: string; content: string }> = ({
  label,
  content,
}) => {
  return (
    <Stack
      direction={"row"}
      sx={{
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <P
        sx={{ color: "#000", fontSize: "16px", fontWeight: 500, width: "50%" }}
      >
        {label}
      </P>
      <P
        sx={{
          color: "#000",
          fontSize: "14px",
          fontWeight: 400,
          textAlign: "left",
          width: "50%",
        }}
      >
        {content}
      </P>
    </Stack>
  );
};

const ConfirmationItem: React.FC<{ label: string; content: string }> = ({
  label,
  content,
}) => {
  return (
    <>
      <Stack
        direction={"column"}
        sx={{
          alignItems: "start",
        }}
      >
        <P
          sx={{
            color: "#000",
            fontSize: "16px",
            fontWeight: 500,
            width: "50%",
          }}
        >
          {label}
        </P>
        <P
          sx={{
            color: palette.primary.indigo,
            fontSize: "14px",
            fontWeight: 400,
            textAlign: "left",
            width: "50%",
          }}
        >
          {content}
        </P>
      </Stack>
      <Divider
        sx={{ borderBottomWidth: "2px", borderColor: palette.greyscale[3] }}
      />
    </>
  );
};

const PhoneSection = (
  <>
    <P sx={{ color: "#000", fontSize: "18px", fontWeight: 700 }}>
      {"Enter your phone number"}
    </P>

    <Stack direction={"column"} sx={{ gap: "10px" }}>
      <P sx={{ color: "#000", fontSize: "16px", fontWeight: 500 }}>
        {"Phone number"}
      </P>
      <Stack direction={"row"} sx={{ gap: "5px" }}>
        <Select
          value={"🇨🇦+1"}
          variant="filled"
          IconComponent={KeyboardArrowDownIcon}
          style={
            {
              // color: "red",
            }
          }
        >
          <MenuItem>{"🇨🇦+1"}</MenuItem>
        </Select>
        <P
          sx={{
            color: palette.primary.indigo,
            fontSize: "14px",
            fontWeight: 400,
          }}
        >
          {"4165602999"}
        </P>
      </Stack>
    </Stack>
  </>
);

const OTPSection = (
  <>
    <P sx={{ color: "#000", fontSize: "18px", fontWeight: 700 }}>
      {"Enter the code we texted you"}
    </P>
    <Stack direction={"column"}>
      <P sx={{ color: "#000", fontSize: "16px", fontWeight: 500 }}>{"Code"}</P>
      <P
        sx={{
          color: palette.primary.indigo,
          fontSize: "14px",
          fontWeight: 400,
        }}
      >
        {"34829"}
      </P>
    </Stack>
  </>
);

const InformationSection = (
  <>
    <Stack
      direction={"row"}
      sx={{
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <P sx={{ color: "#000", fontSize: "18px", fontWeight: 700 }}>
        {"Your Information"}
      </P>
      <P
        sx={{
          color: palette.primary.indigo,
          fontSize: "12px",
          fontWeight: 700,
          padding: "10px 16px",
          backgroundColor: palette.greyscale[3],
          borderRadius: "100px",
          cursor: "pointer",
        }}
      >
        {"This is not me"}
      </P>
    </Stack>

    <Stack
      direction={"column"}
      sx={{
        gap: "10px",
        p: "10px",
        border: "2px solid " + palette.greyscale[6],
      }}
    >
      <InformationItem label={"First name"} content={"Colin"} />
      <InformationItem
        label={"Last name"}
        content={"Name 50 char limit lorem ipsum dolor sit ameenstur"}
      />
      <InformationItem label={"Phone number"} content={"+14165602999"} />
    </Stack>
    <Stack direction={"column"}>
      <P sx={{ color: "#000", fontSize: "16px", fontWeight: 500 }}>{"Email"}</P>
      <P
        sx={{
          color: palette.primary.indigo,
          fontSize: "14px",
          fontWeight: 400,
        }}
      >
        {"colin@mosea.io"}
      </P>
    </Stack>
    <Divider
      sx={{ borderBottomWidth: "2px", borderColor: palette.greyscale[3] }}
    />
  </>
);

const ConfirmationSection = (
  <>
    <P sx={{ color: "#000", fontSize: "18px", fontWeight: 700 }}>
      {"Your information"}
    </P>

    {/* <Stack sx={{ height: "100%", overflowY: "auto" }}> */}
    <ConfirmationItem label={"First Name"} content={"Colin"} />
    <ConfirmationItem label={"Last Name"} content={"Lee"} />
    <ConfirmationItem label={"Email"} content={"colin@mosea.io"} />
    <ConfirmationItem label={"Phone Number"} content={"+14165602999"} />
    {/* </Stack> */}
  </>
);

const ticketSummary = [
  {
    title: "Early bird",
    quantity: 1,
    price: "$32.00",
  },
  {
    title: "General Admission",
    quantity: 1,
    price: "$32.00",
  },
  {
    title: "Name 30 char limit lorem ipsum",
    quantity: 1,
    price: "$32.00",
  },
];
