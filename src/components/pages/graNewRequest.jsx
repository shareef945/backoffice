import React from "react";
import Input from "../utils/Input";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
} from "@mui/x-data-grid";
import { useState } from "react";

export default function GraNewRequest() {
  const today = new Date();
  const [date, setDate] = useState(dayjs(today));
  const dummData = {
    status_code: 2000,
    status_reason: "",
    account: "",
    national_id: "",
    earliest_successful_gra_update: "0001-01-01T00:00:00Z",
    transactions: [
      {
        trn_ref_no: "",
        amount_tag: "",
        ac_branch: "H50",
        module: "DE",
        trn_code: "",
        ac_no: "1441000451210",
        drcr_ind: "D",
        ac_ccy: "GHS",
        fcy_amount: "",
        lcy_amount: "",
        counterparty_brn: "H98",
        counterparty_ac: "233000024",
        counterparty_name: "E-LEVY",
        counterparty_ccy: "",
        counterparty_bal: "",
        trn_date: "",
        value_dt: "",
        instrument_code: "1441000451210",
        grp_ref_no: " ",
        client_id: "561452707",
        user_id: "BILLPAY_GH",
        auth_id: "SYSTEM",
        save_timestamp: "2023-01-01T00:51:45.222765Z",
        narration: "",
        elevy_id: "",
        can_raise_reversal: "",
        notes: "",
      },
    ],
  };
  const [accountNumber, setAccountNumber] = useState("");
  const [data, setData] = useState(dummData);

  const getTransactions = `https://eghportal-03/backends/elevy_portal/api/get_customer_txns?ac=${accountNumber}&dt=${date}`;

  function reformatDate(date) {
    setDate(dayjs(date).format("DD-MMM-YYYY"));
  }

  const handleInput = (event) => {
    setAccountNumber(event.target.value);
  };

  const handleChange = (date) => {
    setDate(dayjs(date.$d.toString()).format("DD-MMM-YYYY"));
  };

  const theme = createTheme({
    palette: {
      neutral: {
        main: "#092C4C",
        contrastText: "#fff",
      },
    },
  });

  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarExport />
      </GridToolbarContainer>
    );
  }

  const submitButton = (params) => {
    return (
      <strong>
        {params.row.can_raise_reversal === true ? (
          <ThemeProvider theme={theme}>
            <Button
              variant="contained"
              color="neutral"
              size="small"
              style={{ marginLeft: 16 }}>
              Request Refund
            </Button>
          </ThemeProvider>
        ) : (
          ""
        )}
      </strong>
    );
  };

  const callApi = () => {
    fetch(getTransactions,{credentials:"include"})
      .then((response) => response.json())
      .then((json) => setData(json));
  };

  return (
    <div style={{ vh: "100%" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
          margin: "5% 0 0 2%",
          alignItems: "left",
        }}>
        <form action="" onSubmit={callApi}>
          <div style={{ margin: "2%" }}>
            <TextField
              label="Account Number"
              id="accountNumber"
              value={accountNumber}
              onChange={handleInput}
            />
          </div>
          <div style={{ margin: "2%" }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
                label="Transaction Date"
                inputFormat="YYYY/MM/DD"
                value={dayjs(date).format("YYYY-MM-DD")}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
                id="date"
              />
            </LocalizationProvider>
          </div>

          <div style={{ margin: "5%" }}>
            <ThemeProvider theme={theme}>
              <Button
                color="neutral"
                variant="contained"
                component="label"
                onClick={callApi}>
                Submit
              </Button>
            </ThemeProvider>
          </div>
        </form>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "12%",
        }}>
        <div style={{ height: 300, width: "100%", overflowX: "scroll" }}>
          <DataGrid
            columns={[
              {
                field: "trn_ref_no",
                headerName: "Transaction Ref No",
                flex: 0.7,
                align: "center",
                headerAlign: "center",
              },
              {
                field: "narration",
                headerName: "Narration",
                flex: 2,
                align: "center",
                headerAlign: "center",
              },

              {
                field: "lcy_amount",
                headerName: "Amount",
                align: "center",
                headerAlign: "center",
                flex: 0.3,
              },
              {
                field: "trn_date",
                headerName: "Transaction Date",
                flex: 0.6,
                align: "center",
                headerAlign: "center",
                type: "dateTime",
                valueGetter: ({ value }) =>
                  value && new Date(value).toLocaleDateString("en-US"),
              },
              {
                field: "can_raise_reversal",
                headerName: "Reversal?",
                flex: 0.8,
                renderCell: submitButton,
                align: "center",
                headerAlign: "center",
              },
            ]}
            rows={data.transactions}
            getRowId={(row) => row.trn_ref_no}
            components={{
              Toolbar: CustomToolbar,
            }}
          />
        </div>
      </div>
    </div>
  );
}
