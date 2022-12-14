import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './Style.css'
import { BrowserRouter } from 'react-router-dom';


//Renders the entire application
const container = document.getElementById("root");
const root = createRoot(container);

root.render((
  <BrowserRouter>
    <App /> {/* The various pages will be displayed by the `Main` component. */}
  </BrowserRouter>
  ), document.getElementById('root')
);
