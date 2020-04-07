import React from 'react'
import {Route} from 'react-router-dom' 
import './App.css'
import CssBaseline from '@material-ui/core/CssBaseline'
import Home from './components/Home'
import Resume from './components/Resume'
import Contact from './components/Contact'
import {
  createMuiTheme,
  responsiveFontSizes,
  MuiThemeProvider,
} from'@material-ui/core'


let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

function App() {
  return (
    <>
      <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Route exact path="/" component={Home}/>
      <Route path="/resume" component={Resume}/>
      <Route path="/contact" component={Contact}/>
      </MuiThemeProvider>
    </>
  );
}

export default App;

