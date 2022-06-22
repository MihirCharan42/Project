//import "./login.css";
import { Button, FormControl, FormGroup, InputLabel, Input,makeStyles, Typography } from "@material-ui/core";
import { useContext, useEffect, useRef } from "react";
import { Context } from "../context/Context";
import axios from "axios";

const useStyle= makeStyles({
    container: {
        alignItems: 'center',
        width:'50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop :20
        }
    },
    loginform: {
        margin: '25px 0px 0px 25px',
    },
    loginbutton: {
        margin: '25px 0px 0px 25px',
        marginTop: '30px'
    },
    title: {
        margin: '25px 0px 0px 25px'
    }
})

export default function Login() {
    const classes=useStyle();

    const emailRef= useRef(null);
    const passwordRef= useRef(null);

    const { user,dispatch} = useContext(Context)
    const handleSubmit = async ()=>{
        dispatch({type:"LOGIN_START"});
        try {
            const eref=emailRef.current;
            const pref=passwordRef.current;
            const res = await axios.post("http://localhost:5000/backend/auth/login", {
                email: eref.value,
                password: pref.value
            }); 
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });  
            user.loggedIn=true;
            console.log(user.loggedIn);
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE" });
        }
    };
    return (
        <div className={classes.container}>
        <FormGroup className="loginform">
            <Typography variant="h3" className={classes.title}>Login</Typography>
            <FormControl className={classes.loginform}>
                <InputLabel>Email</InputLabel>
                <Input type ="text" name='email' ref={emailRef} onChange={e=> emailRef.current.value=e.target.value}/>
            </FormControl>
            <FormControl className={classes.loginform}>
                <InputLabel>Password</InputLabel>
                <Input type="password" name='password' ref={passwordRef} onChange={e=> passwordRef.current.value=e.target.value}/>
            </FormControl>
            <Button variant="contained" color="primary" onClick={() => handleSubmit()} className={classes.loginbutton}>Login</Button>
        </FormGroup>
        </div>
    )
}