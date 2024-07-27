import React, { useEffect, useState } from 'react';
import Style from './BaseLayout.module.scss';
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import MultiPageRoutes from './MultiPageRoutes';
import { singlePage } from '../info/Info';
import SinglePageRoutes from './SinglePageRoutes';
import useScrollObserver from '../hooks/useScrollObserver';

export default function BaseLayout() {
  const location = useLocation();

  const [active, setActive] = useState(location.pathname === '/' ? 'home' : location.pathname.slice(1));
  const refHome = useScrollObserver(setActive);
  const refCreate = useScrollObserver(setActive);
  const refView = useScrollObserver(setActive);
  const [darkMode, setDarkMode] = useState(false);

  function handleToggleDarkMode() {
    const oppositeOfCurrentDarkMode = !darkMode;
    localStorage.setItem('darkMode', `${oppositeOfCurrentDarkMode}`);
    setDarkMode(oppositeOfCurrentDarkMode);
  }

  useEffect(() => {
    try {
      const detectedDarkMode = JSON.parse(localStorage.getItem('darkMode'));
      setDarkMode(detectedDarkMode !== null ? detectedDarkMode : false);
    } catch (error) {
      console.error("Error parsing darkMode from localStorage", error);
      localStorage.setItem('darkMode', 'false');
    }
  }, []);

  return (
    <Box className={darkMode ? Style.dark : Style.light}>
      <Grid container display={'flex'} flexDirection={'column'} minHeight={'100vh'} justifyContent={'space-between'}>
        <Grid item>
          <Navbar darkMode={darkMode} handleClick={handleToggleDarkMode} active={active} setActive={setActive} />
        </Grid>
        <Grid item flexGrow={1}>
          {singlePage ? <SinglePageRoutes refs={{ refHome, refCreate, refView }} /> : <MultiPageRoutes />}
        </Grid>
        <Grid item>
          <Box component={'footer'} display={'flex'} flexDirection={'column'} alignItems={'center'} py={'1.5rem'} sx={{ opacity: 0.7 }} width={'100%'}>
            <p>
              Created with React.js by{' '}
              <a href={'https://www.linkedin.com/in/yash-sakhare12/'}>Yash Sakhare</a>
            </p>
            <p>&copy; 2024</p>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
