// TaskForm.js
import React, { useState } from 'react';
import { Button, TextField, RadioGroup, Radio, FormControlLabel, FormControl, FormLabel, Modal } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';

const TaskForm = ({ open, handleClose, addTask }) => {
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('todo');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = () => {
    const task = {
      description,
      status,
      dueDate,
    };

    addTask(task);
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <div className="modal">
        <h2>Add Task</h2>
        <TextField
          label="Description"
          fullWidth
          variant="outlined"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <FormControl component="fieldset" style={{ marginTop: '10px' }}>
          <FormLabel component="legend">Status</FormLabel>
          <RadioGroup row value={status} onChange={(e) => setStatus(e.target.value)}>
            <FormControlLabel value="todo" control={<Radio />} label="Todo" />
            <FormControlLabel value="inprogress" control={<Radio />} label="In Progress" />
            <FormControlLabel value="taskdone" control={<Radio />} label="Task Done" />
          </RadioGroup>
        </FormControl>
        <TextField
          label="Due Date"
          type="date"
          fullWidth
          variant="outlined"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={handleSubmit}
          style={{ marginTop: '10px' }}
        >
          Add Task
        </Button>
      </div>
    </Modal>
  );
};

export default TaskForm;
