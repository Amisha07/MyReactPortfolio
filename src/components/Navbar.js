import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import './Navbarstyles.css'
import MobilRightMenuSlider from '@material-ui/core/Drawer'
import {
    AppBar,
    Toolbar,
    ListItem,
    ListItemIcon,
    IconButton,
    ListItemText,
    Avatar,
    Divider,
    List,
    Typography,
    Box
} from "@material-ui/core"
import {
    ArrowBack,
    ArrowDownward,
    AssignmentInd,
    Home,
    Apps,
    ContactMail
} from "@material-ui/icons"
import avatar from "../img/avatar.png"
import avatar1 from "../img/avatar1.png"


// CSS Styles
const useStyles = makeStyles (theme => ({
    menusliderContainer: {
        width: 250,
        background: "#fff",
        height: "100%"
    },

    mainContent: {
        display: "block",
        margin: "0.5em auto",
        width: theme.spacing(13),
        height: theme.spacing(13)
    },

    listItem: {
        color: "#FF5733",
        paddingLeft: "1rem",
        fontFamily: 'Roboto Mono',
        fontWeight: 700,
        fontSize: "30px"
    },

    nav: {
        boxShadow:"none",
      
    }
  
}));

const menuItems = [
    {
        listIcon: <Home/>,
        listText: "Home",
        listPath: "/"
    },
    {
        listIcon: <AssignmentInd/>,
        listText: "Resume",
        listPath: "/resume"
    },
    {
        listIcon: <Apps/>,
        listText: "Portfolio",
        listPath: "/porfolio"
    },
    {
        listIcon: <ContactMail/>,
        listText: "Contact",
        listPath: "/contact"
    }
]



const Navbar = () => {

    const [state, setState] = useState({
        right: false
    });

    const toggleSlider = ((slider, open) => () => {
        setState({...state, [slider]: open});
    });

    const classes =  useStyles();

    const sideList = slider => (
        <Box 
        className={classes.menusliderContainer} 
        component="div"
        onClick={toggleSlider(slider, false)}>
                <Avatar className={classes.mainContent} src={avatar1} alt="Amisha Gadhia" 
                style={{ width: '150px', height: '150px' }} />
            <Divider />
            <List>
                {menuItems.map((lsItem, key)=> (
                    <ListItem button key={key} component={Link} to={lsItem.listPath} >
                        <ListItemIcon className={classes.listItem}>
                            {/* {lsItem.listIcon} */}
                        </ListItemIcon> 
                        <ListItemText variant="h4" className={classes.listItem} primary={lsItem.listText} style={{ fontFamily: 'Roboto Mono',
                    fontWeight: 700, fontSize: "30px"}}/> 
                        
                    </ListItem> 
                ))}
               
            </List>
            
        </Box>
    )

    return (
      <>              
        <Box component="nav">
            <AppBar className={classes.nav} position="fixed" style={{ background: 'none', padding: '15px' }}>
                <Toolbar >
                        <Avatar component={Link} to={'/'}  src={avatar} alt="Amisha Gadhia" 
                        style={{ width: '60px', height: '60px', top: '10px'}} />
                        {/* <ArrowBack style= {{ font: '5px' }}/> */}
                   
                        {/* <Typography variant="h6" style={{color: '#00CCCC'}}>           
                            AG
                        </Typography> */}

                    <MobilRightMenuSlider 
                        anchor="right"  
                        open={state.right}
                        onClose={toggleSlider("right", false)}>
                            {sideList("right")}
                    </MobilRightMenuSlider>
                </Toolbar>  
            </AppBar> 

            
            
           
            
        </Box>

            <div className="toggle_bts"  onClick={toggleSlider("right", true)}>
		        <a className="toggle-theme-panel sett" href="#">
			        <i className="fa fa-caret-left" aria-hidden="true"></i>
                </a>
	        </div>
      </>
    )
}

export default Navbar