import * as React from "react";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
} from "@mui/x-data-grid";
import { Button } from "@mui/material";

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

export default function SubmittedTable() {
  const submitButton = (params) => {
    return (
      <strong>
        {params.row.can_raise_reversal === true ? (
          <Button
            variant="contained"
            color="primary"
            size="small"
            style={{ marginLeft: 16 }}>
            Refund
          </Button>
        ) : (
          "Refund Unavailable"
        )}
      </strong>
    );
  };

  const data1 = {
    status_code: 200,
    status_reason: "",
    account: "",
    national_id: "",
    earliest_successful_gra_update: "0001-01-01T00:00:00Z",
    transactions: [
      {
        trn_ref_no: "H50jtxr230030004",
        amount_tag: "",
        ac_branch: "H50",
        module: "DE",
        trn_code: "",
        ac_no: "1441000451210",
        drcr_ind: "D",
        ac_ccy: "GHS",
        fcy_amount: 0,
        lcy_amount: 3,
        counterparty_brn: "H98",
        counterparty_ac: "233000024",
        counterparty_name: "E-LEVY",
        counterparty_ccy: "",
        counterparty_bal: 0,
        trn_date: "2023-01-03T00:00:00Z",
        value_dt: "2023-01-01T00:00:00Z",
        instrument_code: "1441000451210",
        grp_ref_no: " ",
        client_id: "561452707",
        user_id: "BILLPAY_GH",
        auth_id: "SYSTEM",
        save_timestamp: "2023-01-01T00:51:45.222765Z",
        narration:
          "CHARGE REF:561452707  MTN_MOBILE_MONEY MOBILE NO 233544033618",
        elevy_id: "",
        can_raise_reversal: true,
        notes: "",
      },
      {
        trn_ref_no: "H50jtxr230030006",
        amount_tag: "",
        ac_branch: "H50",
        module: "DE",
        trn_code: "",
        ac_no: "1441000451210",
        drcr_ind: "D",
        ac_ccy: "GHS",
        fcy_amount: 0,
        lcy_amount: 3,
        counterparty_brn: "H98",
        counterparty_ac: "233000024",
        counterparty_name: "E-LEVY",
        counterparty_ccy: "",
        counterparty_bal: 0,
        trn_date: "2023-01-03T00:00:00Z",
        value_dt: "2023-01-01T00:00:00Z",
        instrument_code: "1441000451210",
        grp_ref_no: " ",
        client_id: "561452707",
        user_id: "BILLPAY_GH",
        auth_id: "SYSTEM",
        save_timestamp: "2023-01-01T00:51:45.297086Z",
        narration:
          "ELEVY ON REF:561452707  MTN_MOBILE_MONEY MOBILE NO 233544033618",
        elevy_id: "",
        can_raise_reversal: false,
        notes: "",
      },
      {
        trn_ref_no: "H50nvof230030006",
        amount_tag: "",
        ac_branch: "H50",
        module: "DE",
        trn_code: "",
        ac_no: "1441000451210",
        drcr_ind: "D",
        ac_ccy: "GHS",
        fcy_amount: 0,
        lcy_amount: 1.32,
        counterparty_brn: "H98",
        counterparty_ac: "233000024",
        counterparty_name: "E-LEVY",
        counterparty_ccy: "",
        counterparty_bal: 0,
        trn_date: "2023-01-03T00:00:00Z",
        value_dt: "2023-01-01T00:00:00Z",
        instrument_code: "1441000451210",
        grp_ref_no: " ",
        client_id: "561457617",
        user_id: "BILLPAY_GH",
        auth_id: "SYSTEM",
        save_timestamp: "2023-01-01T01:34:34.710001Z",
        narration:
          "ELEVY ON REF:561457617  MTN_MOBILE_MONEY MOBILE NO 233555722666",
        elevy_id: "",
        can_raise_reversal: true,
        notes: "",
      },
      {
        trn_ref_no: "H50lpxx230030006",
        amount_tag: "",
        ac_branch: "H50",
        module: "DE",
        trn_code: "",
        ac_no: "1441000451210",
        drcr_ind: "D",
        ac_ccy: "GHS",
        fcy_amount: 0,
        lcy_amount: 2.1,
        counterparty_brn: "H98",
        counterparty_ac: "233000024",
        counterparty_name: "E-LEVY",
        counterparty_ccy: "",
        counterparty_bal: 0,
        trn_date: "2023-01-03T00:00:00Z",
        value_dt: "2023-01-02T00:00:00Z",
        instrument_code: "1441000451210",
        grp_ref_no: " ",
        client_id: "561916478",
        user_id: "BILLPAY_GH",
        auth_id: "SYSTEM",
        save_timestamp: "2023-01-02T21:27:16.254746Z",
        narration:
          "ELEVY ON REF:561916478  MTN_MOBILE_MONEY MOBILE NO 233591585676",
        elevy_id: "",
        can_raise_reversal: false,
        notes: "",
      },
      {
        trn_ref_no: "H50gmih230030006",
        amount_tag: "",
        ac_branch: "H50",
        module: "DE",
        trn_code: "",
        ac_no: "1441000451210",
        drcr_ind: "D",
        ac_ccy: "GHS",
        fcy_amount: 0,
        lcy_amount: 1.2,
        counterparty_brn: "H98",
        counterparty_ac: "233000024",
        counterparty_name: "E-LEVY",
        counterparty_ccy: "",
        counterparty_bal: 0,
        trn_date: "2023-01-03T00:00:00Z",
        value_dt: "2023-01-03T00:00:00Z",
        instrument_code: "1441000451210",
        grp_ref_no: " ",
        client_id: "562218454",
        user_id: "BILLPAY_GH",
        auth_id: "SYSTEM",
        save_timestamp: "2023-01-03T18:50:46.196198Z",
        narration:
          "ELEVY ON REF:562218454  VODAFONE_CASH MOBILE NO 233202499067",
        elevy_id: "",
        can_raise_reversal: false,
        notes: "",
      },
    ],
  };

  return (
    <div style={{ height: 500, width: "100%" }}>
      <DataGrid
        columns={[
          { field: "trn_ref_no", headerName: "Transaction Ref No", flex: 1 },
          { field: "ac_branch", headerName: "Branch" },
          { field: "drcr_ind", headerName: "D/C" },
          { field: "ac_ccy", headerName: "Currency" },
          { field: "lcy_amount", headerName: "Amount" },
          { field: "trn_date", headerName: "Transaction Date", flex: 1 },
          { field: "value_dt", headerName: "Transaction Value", flex: 1 },
          {
            field: "can_raise_reversal",
            headerName: "Reversal?",
            flex: 1,
            renderCell: submitButton,
          },
        ]}
        rows={data1.transactions}
        getRowId={(row) => row.trn_ref_no}
      />
    </div>
  );
}
