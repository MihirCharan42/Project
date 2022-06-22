import {AppBar, makeStyles, Toolbar} from '@material-ui/core';
import { useContext, useReducer } from 'react';
import { NavLink } from 'react-router-dom';
import { Context } from '../context/Context';
import { Button } from "@material-ui/core";
import Reducer from '../context/Reducer';
    
const useStyle = makeStyles({
    header: {
        background:'#42C2FF'
    },
    tabs :{
        color:'#FFFFFF',
        textDecoration: 'none',
        marginRight: 20,
        fontSize:20
    }
})
const NavBar= () => {
    const classes= useStyle();
    const { user, state ,dispatch }= useContext(Context);
    const handleLogout = async() => {
        await dispatch({ type: "LOGOUT" });
        user.loggedIn=false;
        window.location.href='/'
    }
    const RenderMenu = () => {
        if(user.loggedIn) {
            return (
                <AppBar className={classes.header} position="static">
                <Toolbar>
                    <NavLink className={classes.tabs} to="./">Covid Resources</NavLink>
                    <NavLink className={classes.tabs} onClick={() => handleLogout()} to="./">Logout</NavLink>
                    <NavLink className={classes.tabs} to="/edit">Edit Post</NavLink>
                </Toolbar>
            </AppBar>
            )
        }
        else {
            return (
                <AppBar className={classes.header} position="static">
                <Toolbar>
                    <NavLink className={classes.tabs} to="./">Covid Resources</NavLink>
                    <NavLink className={classes.tabs} to="/login" >Login</NavLink>
                    <NavLink className={classes.tabs} to="/register">Register</NavLink>
                </Toolbar>
            </AppBar>
            )
        }
    }
    return (
        <RenderMenu/>
    )
}

export default NavBar;

