/* eslint-disable react/style-prop-object */
import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"
import {
    Typography,
    Box,
    Avatar,
    Link,
    Button
}from '@material-ui/core'
import './Navbarstyles.css'
import Border from './Border'
import Navbar from './Navbar'
import BottumNav from './BottumNav'

import avatar1 from "../img/avatar1.png"

const userStyles = makeStyles(theme => ({  
 
    root: {
        flexGrow: 0.3,
        background: "white",
        fontFamily: 'Roboto Mono'
    },
    paper: {
        fontFamily: 'Roboto Mono',
        padding: theme.spacing(1),
        boxShadow: 'none'
    },

    mainContainer: {
        background: "white",
        fontFamily: 'Roboto Mono'
    },
    
    timeLine: {
        fontFamily: 'Roboto Mono',
        position:"relative",
        "&:before": {
            content: "''",
            postion: "absolute",
            
        },
        "&:after":{
            content: "''",
            display: "table",
            clear: "both"
        },
        [theme.breakpoints.up("md")]:{
            padding: "2rem",
            "&:before": {
                left: "calc(50% - 1px)",
                right: "auto"
            }
        }
    },

    timeLineItem: {
        fontFamily: 'Roboto Mono',
        padding: "1rem",
        borderBottom: "2px solid #FF5733",
        borderLeft: "2px solid #FF5733",
        postion: "relative",
        margin: "1rem 3rem 1rem 1rem",
        clear: "both",
        "&:after": {
            content: "''",
            psotion: "absolute" 
        },
        "&:before": {
            content: "''",
            postion: "absolute",
            right: "-0.625rem",
            top: "calc(50% - 5px)",
            
        },
        [theme.breakpoints.up("lg")]: {
            width: "44%",
            margin: "1rem",
            "&:nth-of-type(2n)": {
                float: "right",
                margin: "1rem",
                borderColor: "#FF5733",
            },
            "&:nth-of-type(2n):before": {
                right: "auto",
                left: "-0.625rem",
                borderColor: "transperent transperent #FF5733 #FF5733"
            }
        }
    },

    timeLineYear: {
        fontFamily: 'Roboto Mono',
        textAlign: "center",
        maxWidth:"9.375rem",
       
        fontSize: "1.3rem",
        color: "#FF5733",
     
      
        border: "2px solid #FF5733",
        "&:before": {
            display: "none"
        },
        [theme.breakpoints.up("lg")]:{
        textAlign:"center",
        margin: "0 auto",
            "&:nth-of-type(2n)": {
                float: "none",
                margin:"0 auto"
            },
            "&:nth-of-type(2n):before":{
                display: "none"
            }
        }
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
        fontSize: '15px'
    },
    heading1: {
        fontFamily: 'Roboto Mono',
        color:"#FF5733",
        
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

const Resume = () => {
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
                        <Typography className={classes.heading} variant="h4">About Information</Typography>
                    </Paper>
                    </Grid>
                
                    <Grid item xs={12} sm={3}>
                    <Paper className={classes.paper}>   <Avatar className={classes.mainContent} src={avatar1} alt="Amisha Gadhia" 
                            style={{ width: '7rem', height: '7rem' }} align="center" /></Paper>
                    </Grid>
                    <Grid item xs={12} sm={9}>
                    <Paper className={classes.paper}>
                    <Typography className={classes.fontRobo} align="justify">
                        Hello! I’m Amisha Gadhia. Web designer and developer from USA, Texas, Dallas. I have rich experience in web site design and building, also I am good at Drupal CMS. I love to talk with you about my skills and work.
                    </Typography> 	  
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                    <Paper className={classes.paper}>
                    <Link   underline="none" href="./img/AmishaGadhia_resume.doc" download> <Button className={classes.btn} variant="outlined">Resume</Button></Link>
                    </Paper>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                    <Paper className={classes.paper}>
                    <Typography className={classes.fontRobo}><strong className={classes.heading1}>Age:</strong> 24</Typography> 	
                    </Paper>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                    <Paper className={classes.paper}>
                    <Typography className={classes.fontRobo}><strong className={classes.heading1}>Address:</strong> Dallas, Texas</Typography> 	
                    </Paper>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                    <Paper className={classes.paper}>
                    <Typography className={classes.fontRobo}><strong className={classes.heading1}>Phone:</strong> +1 (940) 273-0957</Typography> 	
                    </Paper>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                    <Paper className={classes.paper}>
                    <Typography className={classes.fontRobo}><strong className={classes.heading1}>Email:</strong>
                    <Link href="mailto:amishabgadhia@gmail.com" underline="none" color="inherit"> Gmail</Link>
                    </Typography> 	
                    </Paper>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                    <Paper className={classes.paper}>
                        <Typography className={classes.fontRobo}>
                        <strong className={classes.heading1}>LinkedIn:</strong>
                        <Link target="_blank" href="https://www.linkedin.com/in/amishagadhia" underline="none" color="inherit"> Amisha Gadhia</Link>
                        </Typography>		
                    </Paper>
                    </Grid>
                </Grid>
                
                
                <br/>
                <Grid container spacing={1}>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <Typography className={classes.heading} variant="h4">Education</Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                   
                    <Grid item xs={12} sm={9}>
                    <Paper className={classes.paper}>
                        <Typography className={classes.fontRobo}>
                        M.S., Computer Science, University of North Texas, Denton, Texas	    
                        </Typography> 	  
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Paper className={classes.paper}>
                        <Typography className={classes.fontRobo} >
                            Graduation May 2020
                        </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={9}>
                    <Paper className={classes.paper}>
                        <Typography className={classes.fontRobo} >
                        B.E., Computer Engineering, Gujarat Technological University, Gujarat, India		    
                        </Typography> 	  
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Paper className={classes.paper}>
                        <Typography className={classes.fontRobo} >
                            Graduation May 2017
                        </Typography>
                        </Paper>
                    </Grid>
                </Grid>

                <br/>
                <Grid container spacing={1}>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <Typography className={classes.heading} variant="h4">Skills</Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                   
                    <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>
                        <div class="skills percent">
                            <ul>
                                <li>
                                    <div class="name">Web Design</div>
                                    <div class="progress ">
                                        <div class="percentage" style={{width: '90%'}}> 
                                            <span class="percent">90%</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="name">Photoshop</div>
                                    <div class="progress ">
                                        <div class="percentage" style={{width: '70%'}}> 
                                            <span class="percent">70%</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="name">Graphic Design</div>
                                    <div class="progress ">
                                        <div class="percentage" style={{width: '80%'}}> 
                                            <span class="percent">80%</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="name">Web Development</div>
                                    <div class="progress ">
                                        <div class="percentage" style={{width: '85%'}}> 
                                            <span class="percent">85%</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>
                        <div class="skills percent">
                            <ul>
                                <li>
                                    <div class="name">HTML/CSS</div>
                                    <div class="progress ">
                                        <div class="percentage" style={{width: '90%'}}> 
                                            <span class="percent">90%</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="name">Material UI</div>
                                    <div class="progress ">
                                        <div class="percentage" style={{width: '70%'}}> 
                                            <span class="percent">70%</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="name">React</div>
                                    <div class="progress ">
                                        <div class="percentage" style={{width: '70%'}}> 
                                            <span class="percent">70%</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="name">Drupal</div>
                                    <div class="progress ">
                                        <div class="percentage" style={{width: '85%'}}> 
                                            <span class="percent">85%</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </Paper>
                    </Grid>
                </Grid>
            
            
            <br/>
            <Box component="header" className={classes.mainContainer}>
                
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Typography className={classes.heading} variant="h4">Work experience</Typography>
                    </Paper>
                </Grid>
                <Box component="div">   


                </Box>
                <Box component="div" className={classes.timeLine}>
                    <Typography 
                        variant="h4"
                        className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                            2020
                    </Typography>
                    
                    <Box 
                        component="div" 
                        aligh="center" 
                        className={classes.timeLineItem}>
                       <Typography 
                            variant="h5" 
                            className={classes.subHeading}>
                                Front-end Drupal Developer, Graduate Assistant 	
                        </Typography>
                        <Typography 
                            variant="subtitle1" 
                            className={classes.fontRobo}><strong className={classes.heading1}>Company:</strong> University Information Technology at University of North Texas
                        </Typography>
                        <Typography 
                            variant="subtitle1"
                            className={classes.fontRobo}>
                            <strong className={classes.heading1}>Duration:</strong> August 2018 - Present
                        </Typography>
                        <Typography 
                            variant="subtitle1" 
                            className={classes.fontRobo}><strong className={classes.heading1}>Details:</strong>Determines clients’ needs to design websites that meet their requirements 
                            </Typography>
                        <Typography 
                            variant="subtitle1" 
                            className={classes.fontRobo}>Develops accessibility-compliant websites with fast load times, mobile compatibility, well-planned information architecture, well-formatted content, browser consistency, effective navigation, good error handling, valid mark-up & clean code, contrasting color scheme, usable forms
                            </Typography>
                         <Typography 
                            variant="subtitle1" 
                            className={classes.fontRobo}>Creates webforms, views and calendar using Drupal modules
                        </Typography>
                        <Typography 
                            variant="subtitle1" 
                            className={classes.fontRobo}>Maintains developed websites. https://it.unt.edu/, https://hpc.unt.edu/
                        </Typography>
                        <Typography 
                            variant="subtitle1" 
                            className={classes.fontRobo}>Designed wireframes using Adobe XD, prototyped and developed web pages for UNT financial aid department and performed Google Analytics to old website https://sfa19-dev.unt.edu/home.
                            Created GIFs using Adobe Photoshop, Adobe InDesign 
                            
                        </Typography>
                        <Typography 
                            variant="subtitle1" 
                            className={classes.fontRobo}>Created documentation on Drupal CMS for new users’ understanding https://drupal.unt.edu/drupal-guide
                        </Typography>
                    </Box>

                    <Typography 
                        variant="h4"
                        className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                            2019
                    </Typography>

                    <Box 
                        component="div" 
                        aligh="center" 
                        className={`${classes.timeLineItem} ${classes.fontRobo}`}>
                        <Typography 
                            variant="h5" 
                            className={classes.subHeading}>
                                Research Assistant – full time summer employment 
                        </Typography>
                        <br/>
                        <Typography 
                            variant="subtitle1" 
                            className={classes.fontRobo}><strong className={classes.heading1}>Company:</strong> Research Information Technology Services at University of North Texas
                        </Typography>
                        <Typography 
                            variant="subtitle1"
                            className={classes.fontRobo}>
                            <strong className={classes.heading1}>Duration:</strong>    May 2019 – August 2019
                        </Typography>
                          
                   
                        <Typography 
                            variant="subtitle1" 
                            className={classes.fontRobo}><strong className={classes.heading1}>Details:</strong>Data analysis project using R contains Correlation Linear Recreation Modeling, non-Linear Modeling, Bayesian Methods, handling missing data and fit the best model in R Studio </Typography>
                        <Typography 
                            variant="subtitle1" 
                            className={classes.fontRobo}>Handled the Talon3 area Linux administration and worked with Linux for handling jobs of python scripts  </Typography>
                         <Typography 
                            variant="subtitle1" 
                            className={classes.fontRobo}>Developed websites using R markdown; Administrated the OTRS ticketing system 
                        </Typography>
                    </Box>

                </Box>
            </Box>
        </div>
    </Box>
    <BottumNav />
        </>
    )
}

export default Resume
