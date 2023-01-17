import React from "react";
import Input from "../utils/Input";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TransactionsTable from "../utils/TransactionsTable";

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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
          margin: "5% auto",
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
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <TransactionsTable />
      </div>
    </div>
  );
}
