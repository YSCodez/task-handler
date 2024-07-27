import Home from "./home/Home";
import Create from "./create/Create"
import View from "./view/View"
import React from 'react';
import { Route, Routes } from 'react-router-dom';

export default function MultiPageRoutes() {
  return (
    <Routes>
      <Route exact path={'/'} element={<Home />} />
      <Route exact path={'/create'} element={<Create />} />
      <Route exact path={'/view'} element={<View />} />
    </Routes>
  )
}
