import React from "react";
import Navbar from "../utils/Nav";
import { Link } from "react-router-dom";
import BasicTextFields from "../utils/Input";
import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function GraSimulation() {
  const theme = createTheme({
    palette: {
      neutral: {
        main: "#092C4C",
        contrastText: "#fff",
      },
    },
  });
  return (
    <div>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginTop: "8%",
            alignItems: "center",
          }}>
          <div>
            <BasicTextFields label="Sender's Account Number" />
          </div>
          <div>
            <BasicTextFields label="Sender's Account Number" />
          </div>
          <div>
            <BasicTextFields label="Beneficiary's Account Number" />
          </div>
          <div>
            <BasicTextFields label="Amount" />
          </div>
          <div>
            <BasicTextFields label="E-Levy" />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "3%",
          }}>
          <ThemeProvider theme={theme}>
            <Button color="neutral" variant="contained">
              Submit
            </Button>
          </ThemeProvider>
        </div>
      </div>
    </div>
  );
}
