import React from 'react'
import {makeStyles, withStyles} from '@material-ui/core/styles'
import {
    Typography,
    Box,
    Avatar,
    Link,
    InputLabel,
    Input,
    FormHelperText,
    FormControl,
    TextField,
    Grid,
    Button,
    Paper
}from '@material-ui/core'
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SendIcon from '@material-ui/icons/Send';
import EmailIcon from '@material-ui/icons/Email';
import './Navbarstyles.css'
import Border from './Border'
import Navbar from './Navbar'
import BottumNav from './BottumNav'



const userStyles = makeStyles(theme => ({  
 
    root: {
        flexGrow: 0.3,
        background: "white",
        fontFamily: 'Roboto Mono',

        
    },
   
    paper: {
        fontFamily: 'Roboto Mono',
        padding: theme.spacing(2),
        boxShadow: 'none'
    },

    mainContainer: {
        background: "white",
        fontFamily: 'Roboto Mono'
    },
    heading:{
        fontFamily: 'Roboto Mono',
        color: "#FF5733",
        padding: "1rem 0",
        textTransform: "uppercase",
        
    },
    subHeading: {
        fontFamily: 'Roboto Mono',
        padding: "0",
        textTransform: "uppercase",
       
    },
    fontRobo: {
        fontFamily: 'Roboto Mono',
        fontSize: '11px'
    },
    heading1: {
        fontFamily: 'Roboto Mono',
        color:"#FF5733",
        fontSize: '15px',
        position:"absolute"
        
    },
    icon: {
        paddingRight: "8px",
        color: 'rgba(0, 0, 0, 0.54)',
        '&:hover': {
            color: "#FF5733"
          }
    },
    formStyles: {
        fontFamily: 'Roboto Mono',
        "&:focused": {
            color: "white",
            background: "white"
          }
    },
    btn: {
        fontFamily: 'Roboto Mono',
        color: "#FF5733",
        borderColor: "#FF5733",
        "&:hover":{
            color: "white",
            background: "#FF5733",
        }
    },
 
}));




const Contact = () => {
    const classes = userStyles();
    
    return (
    <>
        <Border />
        <Navbar/>

        <Box className="container" style={{padding: '6rem'}}>
            <div className={classes.root} > 
                <Grid container spacing={1} >
                    <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Typography className={classes.heading} variant="h4">Contact Information</Typography>
                    </Paper>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                    <Paper className={classes.paper}>
                    <Typography className={classes.fontRobo}><PhoneIphoneIcon className={classes.icon}  /><strong className={classes.heading1}>Phone</strong></Typography> 
                    <Typography className={classes.fontRobo}>+1 (940) 273-0957</Typography> 	
                    </Paper>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                    <Paper className={classes.paper}>
                    <Typography className={classes.fontRobo}><EmailIcon className={classes.icon} /><strong className={classes.heading1} >Email</strong></Typography> 
                    <Typography className={classes.fontRobo}>amishabgadhia@gmail.com</Typography> 	
                    </Paper>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                    <Paper className={classes.paper}>
                    <Typography className={classes.fontRobo}><LocationOnIcon className={classes.icon}  /><strong className={classes.heading1} >Address</strong></Typography> 
                    <Typography className={classes.fontRobo}>Dallas, TX</Typography> 	
                    </Paper>
                    </Grid>
                    
                </Grid>

                <br />
                <Grid container spacing={1} >
                    <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Typography className={classes.heading} variant="h4">Hire me</Typography>
                    </Paper>
                    </Grid>
                   
                    <Grid item xs={12}>
                    <Paper className={classes.paper}>
                    <FormControl fullWidth={true}>
                        <InputLabel className={classes.formStyles} htmlFor="my-input" fullWidth={true}>Name</InputLabel>
                        <Input id="my-input" className={classes.formStyles}  aria-describedby="my-helper-text" required />
                        </FormControl>
                    </Paper>
                    </Grid>

                    <Grid item xs={12}>
                    <Paper className={classes.paper}>
                    <FormControl  fullWidth={true}>
                        <InputLabel htmlFor="my-input" className={classes.formStyles} >Email</InputLabel>
                        <Input id="my-input" type="email" aria-describedby="my-helper-text" className={classes.formStyles} required />
                        </FormControl>
                    </Paper>
                    </Grid>

                    <Grid item xs={12}>
                    <Paper className={classes.paper}>
                    <FormControl fullWidth={true}>
                        <InputLabel htmlFor="my-input" className={classes.formStyles} >Message</InputLabel>
                        <Input id="my-input" style={{height: '150px'}}  aria-describedby="my-helper-text" className={classes.formStyles} required/>
                        </FormControl>
                    </Paper>
                    </Grid>

                    <Grid item xs={12}>
                    <Paper className={classes.paper}>
                    <Button type="submit" className={classes.btn} variant="outlined" endIcon={<SendIcon />}>Contact Me</Button>
                
                    </Paper>
                    </Grid>
                    
                   </Grid>
            </div>
        </Box>

        <BottumNav/>
    </>
    )
}

export default Contact


