import React, { useState, useEffect } from 'react';
import Style from './Create.module.scss';
import { Box, Button, TextField } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

export default function Create({ innerRef }) {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    // Load tasks from local storage
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  const handleAddTask = () => {
    if (newTask.trim() === '') return;
    const updatedTasks = [...tasks, { text: newTask, completed: false }];
    setTasks(updatedTasks);
    setNewTask('');
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  return (
    <Box
      ref={innerRef}
      component={'main'}
      display={'flex'}
      flexDirection={{ xs: 'column', md: 'row' }}
      alignItems={'center'}
      justifyContent={'center'}
      minHeight={'calc(100vh - 175px)'}
      id={'create'}
      sx={{
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      className={Style.createContainer}
    >
      <Box>
        <h1 className={Style.createTitle}>
          <span>Create Tasks</span>
        </h1>
        <Box className={Style.rectangle}>
          <Box className={Style.formMsg}>
            <TextField
              variant="outlined"
              label="New Task..."
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              fullWidth
              multiline
              sx={{
                height: '100%',
                '& .MuiInputBase-root': {
                  height: '100%',
                },
              }}
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: 'calc(100% - 50px)',
              width: '48%',
            }}
          >
            <div className={Style.text}>
              <h2>Create Task</h2>
              <h4>Enable users to enter task details in a text field and submit them. The task will be captured and processed for display or storage. (Using local storage currently);</h4>
            </div>
            <div className={Style.subBtn}>
              <Button
                onClick={handleAddTask}
                variant="contained"
                startIcon={<AddIcon />}
                fullWidth
              >
                Create
              </Button>
            </div>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
