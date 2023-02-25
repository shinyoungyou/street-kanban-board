import React, { useState } from "react";
import Column from "./Column";
import { columnList } from '../data';

import Box from "@mui/material/Box";

const Board: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: 200,
          height: 600,
        },
      }}
    >
    {columnList.map((column, index)=>(
      <Column key={column.id} /> 
    ))} 
    </Box>
  );
};

export default Board;
