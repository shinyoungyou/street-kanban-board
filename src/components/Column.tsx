import React from "react";

import Paper from "@mui/material/Paper";

interface ColumnProps {}

const Column: React.FC<ColumnProps> = () => {
  return (
    <Paper
      sx={{
        bgcolor: "#F7FAFC",
        display: "flex",
        flexDirection: "column",
        rowGap: "3vh",
        p: 2,
      }}
    />
  );
};

export default Column;
