import React from 'react'
import web from "../src/images/viewscreen.svg";
import {NavLink} from 'react-router-dom';
import Common from './Common';

const About = () => {
    return (
        <>
           <Common name="Welcome to About page" imgsrc={web} visit="/contact" btname="Contact now"/>
        </>
    )
}

export default About
