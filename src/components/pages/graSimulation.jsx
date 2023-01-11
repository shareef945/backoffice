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
      <Navbar header="GRA Simulation" />
      <Link to="/home">
        <img
          style={{
            height: "30px",
            margin: "2% 0 0 3%",
            transform: "rotate(180deg)",
          }}
          src="/right-arrow.svg"
          alt="back arrow"
        />
      </Link>

      <div>
        <div style={{ display: "flex", justifyContent: "center", marginTop:"3%" }}>
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
        <div style={{ display: "flex", justifyContent: "center" , marginTop:"3%"}}>
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
