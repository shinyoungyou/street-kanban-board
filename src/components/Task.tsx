import React from "react";

import Paper from "@mui/material/Paper";

interface TaskProps {
  index: string;
  title: string;
  color: string;
}

const TaskCompo: React.FC<TaskProps> = ({ index, title, color }) => {

  const handleOnDrag = (e: React.DragEvent, index: string) => {
    e.dataTransfer.setData("index", index);
  };


  return (
    <Paper
      elevation={3}
      sx={{
        bgcolor: `${color}`,
        p: 2,
        m: 0.5,
        width: '160px',
        minHeight: '70px' 
      }}
      draggable
      onDragStart={(e) => handleOnDrag(e, index)}
    >
      {title}
    </Paper>
  );
};

export default TaskCompo;
