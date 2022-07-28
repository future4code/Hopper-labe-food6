import { createTheme } from '@mui/material';
import { primaryColor, neutralColor } from './colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
      contrastText: '#000'
    },
    secondary: {
      main: neutralColor,
    },
  },
});