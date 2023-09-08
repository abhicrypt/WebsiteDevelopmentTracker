
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import { styled } from '@mui/system';

import React, { useState, useEffect } from 'react';
import { Button, Container, Grid } from '@mui/material';
// import TaskForm from './TaskForm';
import TaskCard from '../Modal/TaskCard';
import db from '../Modal/db';

const YellowCard = styled(Card)`
  background-color: yellow;
  margin: 15px;
`;

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);


export default function BasicCard() {
    const [open, setOpen] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Load tasks from IndexedDB on initial render
    db.tasks.toArray().then((data) => setTasks(data));
  }, []);

  const handleAddTask = (task) => {
    // Save task to IndexedDB
    db.tasks.add(task).then(() => {
      // Update the state to display the added task
      setTasks([...tasks, task]);
    });
  };
  return (
    
    <Card sx={{ minWidth: 275 , minHeight: '550px'}}>
        <CardHeader title="Task to do" />
        <YellowCard>
             <CardContent>
             {/* Add your text here */}
             {tasks.map((task) => (
          <Grid item xs={12} key={task.id}>
            <TaskCard task={task} />
          </Grid>
        ))}
             </CardContent>
        </YellowCard>
    </Card>
  );
}
