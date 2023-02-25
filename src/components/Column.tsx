import React from "react";
import TaskCompo from "./Task";
import { Task } from "../utils/interfaces";
import { ColumnType } from "../utils/enums";

import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";

interface ColumnProps {
  index: number;
  name: ColumnType;
  color: any;
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

const Column: React.FC<ColumnProps> = ({ name, color, index, tasks, setTasks }) => {
  const handleOnDrop = (e: React.DragEvent) => {
    const index = e.dataTransfer.getData("index");
    setTasks((prev) => {
      const task = prev.find((task) => task.id === index) as Task;
      return [
        ...prev,
        {
          ...task,
          column: name
        }
      ]
    })
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const taskList = tasks.map((task, index) =>(   
    task.column === name &&  <TaskCompo key={task.id} title={task.title} color={task.color} index={task.id} />
  ));

  return (
    <Paper
    sx={{
      bgcolor: "#F7FAFC",
      display: "flex",
      flexDirection: 'column',
      rowGap: '3vh',
      p: 2,
    }}
    onDrop={handleOnDrop}
    onDragOver={handleDragOver}
  >
    <Chip sx={{
      width: '200px',
      height: '32px'
    }} label={name} color={color} />
    <Box sx={{
      display: "flex",
      flexDirection: 'column',
      rowGap: '1vh',
      overflow: 'scroll',
      maxHeight: '90%'
    }}>
      {taskList}
    </Box>
    
  </Paper>
  );
};

export default Column;
