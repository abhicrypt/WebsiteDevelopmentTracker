// App.js
import React, { useState, useEffect } from 'react';
import { Button, Container, Grid } from '@mui/material';
import TaskForm from './TaskForm';
import TaskCard from './TaskCard';
import db from './db';

function App() {
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
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setOpen(true)}
            style={{ marginBottom: '10px' }}
          >
            Add Task
          </Button>
        </Grid>
        {tasks.map((task) => (
          <Grid item xs={12} key={task.id}>
            <TaskCard task={task} />
          </Grid>
        ))}
      </Grid>
      <TaskForm open={open} handleClose={() => setOpen(false)} addTask={handleAddTask} />
    </Container>
  );
}

export default App;
