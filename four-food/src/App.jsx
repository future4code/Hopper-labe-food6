import { ThemeProvider } from '@mui/material';
import React from 'react';
import {theme} from "./Constantes/theme"
import './App.css';
import Rotas from './Madson/Components/Rotas';
import { GlobalState } from './Madson/Global/GlobalState';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalState>
        <Rotas/>
        </GlobalState>
    </ThemeProvider>
  );
}

export default App;
