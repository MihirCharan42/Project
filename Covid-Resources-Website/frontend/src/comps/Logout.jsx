import { Context } from "../context/Context";
import { useContext } from "react";
import { Button,FormGroup,makeStyles } from "@material-ui/core";
    
const useStyle= makeStyles({
    container: {
        alignItems: 'center',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop :20
        }
    },
    buttonstyle: {
        margin: '25px 0px 0px 25px',
        marginTop: '30px'
    },
    formstyle: {
        margin: '25px 0px 0px 25px',
        width:"50%"
    }
})
export default function Logout() {
    const { user, state ,dispatch }= useContext(Context);
    const handleLogout = async() => {
        await dispatch({ type: "LOGOUT" });
        user.loggedIn=false;
        console.log(user.loggedIn);
        window.location.href='/';
    }
    const classes=useStyle();
    return (
        <div className={classes.container}>
        <h1>CLICK THE BUTTON TO LOGOUT</h1>
        <FormGroup className={classes.formstyle}>
        <Button classname={classes.buttonstyle} variant="contained" color="primary" onClick={() => handleLogout()}>Logout</Button>
        </FormGroup>
        </div>
    )
}