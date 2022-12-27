import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { FixedSizeList } from "react-window";

function renderRow(props) {
  const { index, style } = props;
 

  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton>
        <ListItemText primary={`Item ${index + 1}`} />
      </ListItemButton>
    </ListItem>
  );
}

export default function VirtualizedList() {
    var reports = [
        { name: "GRA Submission" },
        { name: "Raise New Request" },
        { name: "Submit Request" },
      ];
  return (
    <FixedSizeList
      height={400}
      width={550}
      itemSize={56}
      itemCount={10}
      overscanCount={5}>
      {reports.map(renderRow)}
      
      {/* {renderRow} */}
    </FixedSizeList>
  );
}
