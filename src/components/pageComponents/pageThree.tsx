import { Button, Stack } from "@mui/material";
import { P } from "../typography/headings";
import { useState } from "react";
import { palette } from "../constants/constants";

export const PageThree: React.FC = () => {
  //corea variables
  const ButtonSx = {};
  //state variables
  const [cardType, setCardType] = useState<"visa" | "other">("visa");
  return (
    <Stack direction={"column"}>
      <P sx={{ color: "#000", fontSize: "18px", fontWeight: 700 }}>
        {"Your card details"}
      </P>
      <Stack
        direction={"row"}
        sx={{
          border: "2px solid " + palette.greyscale[3],
          borderRadius: "25px",
        }}
      >
        <Button>{"Visa debit"}</Button>
        <Button>{"Other"}</Button>
      </Stack>
    </Stack>
  );
};
