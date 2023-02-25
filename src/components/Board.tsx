import React, { useState } from "react";
import Column from "./Column";
import { Task } from "../utils/interfaces";
import { generateTaskList, columnList } from '../data';

import Box from "@mui/material/Box";

const Board: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(generateTaskList);

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
      <Column key={column.id} name={column.name} color={column.color} index={index} tasks={tasks} setTasks={setTasks} /> 
    ))} 
    </Box>
  );
};

export default Board;
