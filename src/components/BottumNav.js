import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { sizing } from '@material-ui/system';
import Link from '@material-ui/core/Link';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';


const useStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        bottom: '10px',
        left: 0,
        width: '100%',
        fontFamily: 'Roboto Mono',
    },
    main: {
      marginTop: theme.spacing(8),
      marginBottom: theme.spacing(2),
    },
    footer: {
      padding: theme.spacing(2.5,2.5),
      marginTop: 'auto',
      backgroundColor:
        "white",
        fontFamily: 'Roboto Mono',
        
    },
    fontRobo: {
        fontFamily: 'Roboto Mono',
        
        fontSize: '0.9rem'
    },
    icon: {
        float: "right",
        paddingBottom: "7px",
        paddingRight: "5px",
        paddingLeft: "5px",
        fontSize:"2rem",
        color: 'rgba(0, 0, 0, 0.54)',
        '&:hover': {
            color: "#FF5733"
          }
    }
}));

function Copyright() {

    const classes = useStyles();
    return (
      <Typography width={1} className={classes.fontRobo} variant="body2" color="textSecondary">
        {'©'} {new Date().getFullYear()}
        {' '}
        <Link color="inherit" href="http://www.amisha360.com">
        www.amisha360.com
        </Link>{', All Rights Reserved.'}
        
      </Typography>
    );
}



const BottumNav = () => {
    const classes = useStyles();

    return (
      <div className={classes.root} width={1}>
        <footer className={classes.footer}>
          <Container >
            <Typography className={classes.fontRobo} variant="body1"></Typography>
            <a target="_blank" href="https://www.linkedin.com/in/amishagadhia">
                <LinkedInIcon  content={Link} className={classes.icon} />
            </a>
            <a target="_blank" href="https://github.com/Amisha07">
                <GitHubIcon content={Link} className={classes.icon} />
            </a>
            <Copyright />
          </Container>
          <Container>
                 
          </Container>
         
        </footer>
      </div>
    );
  }
export default BottumNav
  