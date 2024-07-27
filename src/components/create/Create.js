import React from 'react';
import Style from './Create.module.scss';
import { Box } from "@mui/material";
import { info } from "../../info/Info";

export default function Home({ innerRef }) {
  // console.log('Image URL:', info.centreimg);  // Log the image URL

  return (
    <Box>
      <h1>
        <span style={{ background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{info.ProjfirstName}</span>
        <span className={Style.hand}></span>
      </h1>
    </Box>
  );
}
