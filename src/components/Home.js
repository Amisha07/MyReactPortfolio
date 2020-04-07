import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import {makeStyles} from '@material-ui/core/styles'
import Particles from 'react-particles-js'
import BottumNav from './BottumNav'
import { Border } from './Border'

const useStyles = makeStyles (theme =>({
    particlesCanvas:{
        position: "absolute",
        opacity: 0.5
    }
}))

const Home = () => {
 
    const classes = useStyles()

    return (
        <>
            <Border />
            <Navbar />
            <Header />
            <BottumNav />
        </>
    )
}


export default Home