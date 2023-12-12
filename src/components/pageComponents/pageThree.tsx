import { Stack } from "@mui/material";
import { P } from "../typography/headings";

export const PageThree: React.FC = () => {
  return (
    <Stack direction={"column"}>
      <P sx={{ color: "#000", fontSize: "18px", fontWeight: 700 }}>
        {"Your card details"}
      </P>
    </Stack>
  );
};
