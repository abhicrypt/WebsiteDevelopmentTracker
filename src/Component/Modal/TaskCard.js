// TaskCard.js
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const TaskCard = ({ task }) => {
  return (
    <Card variant="outlined" style={{ marginBottom: '10px' }}>
      <CardContent>
        <Typography variant="h6">{task.description}</Typography>
        <Typography>Status: {task.status}</Typography>
        <Typography>Due Date: {task.dueDate}</Typography>
      </CardContent>
    </Card>
  );
};

export default TaskCard;
