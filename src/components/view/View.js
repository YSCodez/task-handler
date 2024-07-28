import React, { useState, useEffect } from 'react';
import { Box, List, ListItem, ListItemText, Checkbox, IconButton, TextField, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Style from './View.module.scss';

const View = ({ innerRef }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleToggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) => (
      i === index ? { ...task, completed: !task.completed } : task
    ));
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
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
      id={'view'}
      sx={{
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      className={Style.viewContainer}
    >
      <Box>
        <h1 className={Style.viewTitle}>
          <span>View Tasks</span>
        </h1>
        <Box className={Style.rectangle}>
          <Box display="flex" flexDirection="column" alignItems="center" p={2} width="100%">
            <List className={Style.tasks} style={{ width: '100%', marginTop: 80 }}>
              {tasks.map((task, index) => (
                <ListItem key={index} dense className={Style.tasks__item}>
                  <Checkbox
                    edge="start"
                    checked={task.completed}
                    tabIndex={-1}
                    disableRipple
                    onClick={() => handleToggleTask(index)}
                    className={Style.checkbox}
                  />
                  <ListItemText primary={task.text} style={{ textDecoration: task.completed ? 'line-through' : 'none' }} />
                  <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteTask(index)}>
                    <DeleteIcon />
                  </IconButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default View;
