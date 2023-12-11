import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { palette } from "./components/constants/constants";
import { stepConnectorClasses, stepLabelClasses } from "@mui/material";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const theme = createTheme({
  components: {
    MuiStepConnector: {
      styleOverrides: {
        root: {
          // Set margin to 0 to remove the gap
          marginLeft: "-8px",
          marginRight: "-8px",
        },
        line: {
          // Default line color
          borderColor: "#7f7f7f",
          borderWidth: "2px",
        },
        active: {
          [`& .${stepConnectorClasses.line}`]: {
            // Line color when the step is active
            borderColor: "red",
          },
        },
        completed: {
          [stepConnectorClasses.line]: {
            // Line color when the step is completed
            borderColor: "red",
          },
        },
      },
    },
    // Optionally, you might need to adjust the MuiStepIcon or MuiStepLabel
    // if they are contributing to the gap
    MuiStepIcon: {
      styleOverrides: {
        root: {
          // margin: 0,
          // backgroundColor: "#7F7F7F",
          borderRadius: "100%",
          color: "#7F7F7F",
          // padding: "0px",
          // Adjust the size or margin of the step icon if necessary
        },
        active: {
          backgroundColor: palette.primary.indigo,
          borderRadius: "100%",
          color: "#fff",
        },
        completed: {
          backgroundColor: palette.primary.indigo,
          borderRadius: "100%",
          fill: "#fff",
        },
      },
    },
    MuiStepLabel: {
      styleOverrides: {
        label: {
          // Default label color
          color: "black",
        },
        active: {
          [`&.${stepLabelClasses.active} .${stepLabelClasses.label}`]: {
            // Label color when the step is active
            color: "red",
          },
        },
        completed: {
          [`&.${stepLabelClasses.completed} .${stepLabelClasses.label}`]: {
            // Label color when the step is completed
            color: "red",
          },
        },
      },
    },
  },
});

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
