import { ThemeProvider } from '@mui/material';
import React from 'react';
import {theme} from "./Constantes/theme"
import './App.css';
import Rotas from './Components/Rotas';
import { GlobalState } from './Global/GlobalState';


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
