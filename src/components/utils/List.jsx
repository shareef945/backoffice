import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

export default function BasicList({ reports }) {
  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <List>
        {reports.map((report, index) => (
          <ListItem disablePadding key={index}>
            <ListItemButton>
              <ListItemText primary={report.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
