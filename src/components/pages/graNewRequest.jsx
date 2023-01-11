import React from "react";
import Navbar from "../utils/Nav";
import { Link } from "react-router-dom";
import Input from "../utils/Input";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function GraNewRequest() {
  const today = new Date();
  const [value, setValue] = React.useState(dayjs(today));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

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
      <Navbar header="GRA New Request" />
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

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
          margin: "0 auto",
          alignItems: "center",
          justifyContent: "center",
          justifyItems: "center",
        }}>
        <div style={{ margin: "5%" }}>
          <Input label="Account Number" />
        </div>
        <div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              label="Transaction Date"
              inputFormat="DD/MM/YYYY"
              value={value}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </div>
        <div style={{ margin: "5%" }}>
          <ThemeProvider theme={theme}>
            <Button color="neutral" variant="contained" component="label">
              Submit
              <input hidden accept="image/*" multiple type="file" />
            </Button>
          </ThemeProvider>
        </div>
      </div>
    </div>
  );
}
