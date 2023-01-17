import React from "react";
import UploadButtons from "../utils/Upload";
import SelectGra from "../utils/SelectGra";
import Input from "../utils/Input";

export default function GraBulkRequest() {
  return (
    <div>
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
        <div style={{ margin: "10%" }}>
          <SelectGra />
        </div>
        <div>
          <p>
            Format: (elevy_id, client_id, flexcube_id, account_no,
            amount_to_reverse, reversal_reason)
          </p>
        </div>
        <div style={{ margin: "5%" }}>
          <Input label="Notes/Comments" />
        </div>
        <UploadButtons />
      </div>
    </div>
  );
}
