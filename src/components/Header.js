import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import './Navbarstyles.css'

import {
    createMuiTheme,
    responsiveFontSizes,
    MuiThemeProvider,
    Typography,
    Grid,
    Box
} from'@material-ui/core'
import Typed from 'react-typed'
// import avatar1 from "../img/avatar1.png"

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);


// CSS styles 
const useStyles = makeStyles (theme => ({
    title: {
        fontFamily: 'Roboto Mono',
       
        fontWeight: '700',
        textTransform: 'uppercase',
        letterSpacing: '.04em',
        wordBreak: 'break-word',
        msWordWrap: 'break-word',
        wordWrap: 'break-word',
    },

    subtitle: {
        fontFamily: 'Roboto Mono',
        letterSpacing: '.04em',
        fontWeight: '300'
    },

    typedContainer: {
        position: 'absolute',
        top: '50%',
        left:'50%',
        transform: 'translate(-50%, -50%)',
        width: '100vw',
        textAlign: 'center',
        zIndex: 1,
        fontFamily: 'Roboto'
    }
}));

const Header = () => {
    const classes = useStyles()
    return (
        <MuiThemeProvider theme={theme}>
        <Box className={classes.typedContainer}>
         <Typography className={classes.glitchheading}>
            <span class="main-text skew"><Typography className={classes.title} variant="h2">I'm Amisha Gadhia</Typography>
                <span class="back-text glitch"><Typography className={classes.title} variant="h2">I'm Amisha Gadhia</Typography></span>
            </span>
            </Typography>   
            <Typography className={classes.subtitle} variant="h7">
                <Typed 
                    strings={["UI-UX Designer.", "Web Design and Developement.", "Front-end Developer.", "Based in Dallas."]} 
                    typeSpeed={40} 
                    backSpeed={40}
                    loop
                />
            </Typography>
            <br />
           
        </Box>
        
        </MuiThemeProvider>
    )
}

export default Header
