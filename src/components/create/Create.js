import React, { useState } from 'react';
import Style from './Create.module.scss';
import { Box, Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add'; // Import the plus icon from Material-UI

export default function Create({ innerRef }) {
  const [message, setMessage] = useState(''); // State to store the input message

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
      <Box ref={innerRef}>
        <h1 className={Style.createTitle}>
          <span>Create Tasks</span>
          <span className={Style.hand}></span>
        </h1>
        <Box className={Style.rectangle}>
          <textarea
            className={Style.formMsg}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="New Tasks...."
          />
          <div className={Style.text}>
            <h2>Create Task</h2>
            <h4>Enable users to enter task details in a text field and submit them. The task will be captured and processed for display or storage. (Using local storage currently);</h4>
          </div>
          <div className={Style.subBtn}>
            <Button
              variant="contained"
              startIcon={<AddIcon />} // Add the plus icon here
            >
              Create
            </Button>
          </div>
        </Box>

      </Box>
    </Box>
  );
}
