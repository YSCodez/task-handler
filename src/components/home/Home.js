import React from 'react';
import Style from './Home.module.scss';
import { Box } from "@mui/material";
import { info } from "../../info/Info";

export default function Home({ innerRef }) {
  // console.log('Image URL:', info.centreimg);  // Log the image URL

  return (
    <Box
      ref={innerRef}
      component={'main'}
      display={'flex'}
      flexDirection={{ xs: 'column', md: 'row' }}
      alignItems={'center'}
      justifyContent={'center'}
      minHeight={'calc(100vh - 175px)'}
      id={'home'}
      sx={{
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      className={Style.homeContainer}
    >

      <Box>
        <div>
          <h1 className={Style.title}>
            <span style={{ background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              {info.ProjfirstName}
            </span>
            <span className={Style.hand}></span>
          </h1>
        </div>
        <div className={Style.line}></div>
        <img src={info.centreimg} alt="Center Image" /> {/* Add alt text for accessibility */}
        <h2>{info.ProjlastName}</h2>
      </Box>
    </Box>
  );
}
