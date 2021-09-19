import React from 'react';
import "./App.css";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Dashboard from './pages/Dashboard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Report from './pages/Report';
import AreYouOkay from './pages/AreYouOkay';
import SetIcons from './pages/SetIcons';

const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'sans-serif',
        },
      },
    },
  },
  typography: {
    h6: {
      fontSize: 16
    },
    h5: {
      fontSize: 20,
      fontWeight: 550
    }
  }
});

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route path='/report'>
            <Report/>
          </Route>
          <Route path='/areyouokay'>
            <AreYouOkay />
          </Route>
          <Route path='/'>
            <Dashboard />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
