import Home from "./home/Home";
import Create from "./create/Create";
import View from "./view/View";
import React from 'react';
import { Box } from "@mui/material";

export default function SinglePageRoutes({ refs }) {
  return (<Box mt={'3rem'}>
    <Home innerRef={refs.refHome} />
    <Create innerRef={refs.refCreate} />
    <View innerRef={refs.refCreate} />
  </Box>)
}
