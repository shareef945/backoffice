import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";

export default function BasicList({ reports }) {
  var path = "";
  function handleClick(e) {
    const name = e.target.innerHTML;
    const item = reports.find((item) => item.name === name);
    path = item.path;
  }
  console.log(path);

  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <List>
        {reports.map((report, index) => (
          <ListItem disablePadding key={index}>
            {/* <Link style={{textDecoration:"none"}}> */}
            <ListItemButton>
              <ListItemText primary={report.name} onClick={handleClick} />
            </ListItemButton>
            {/* </Link> */}
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
