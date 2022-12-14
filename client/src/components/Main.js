import React from 'react';
import {Route, BrowserRouter } from 'react-router-dom';

import Home from '../Home';
import App from '../App';

const Main = () => {
  return (
    <BrowserRouter> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/App' component={App}></Route>
    </BrowserRouter>
  );
}

export default Main;