import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function UploadButtons() {
    const theme = createTheme({
        palette: {
          neutral: {
            main: "#092C4C",
            contrastText: "#fff",
          },
        },
      })

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <ThemeProvider theme={theme}>
        <Button color="neutral" variant="contained" component="label">
          Upload
          <input hidden accept="image/*" multiple type="file" />
        </Button>
      </ThemeProvider>
    </Stack>
  );
}
