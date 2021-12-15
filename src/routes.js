import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Details from './views/details';
import Home from './views/home';

const Router = () => (
  <Routes>
    <Route exact path='/' element={<Home/>} />
    <Route path='/home' element={<Home/>} />
    <Route path='/details/:id' element={<Details/>} />
  </Routes>
);

export default Router;