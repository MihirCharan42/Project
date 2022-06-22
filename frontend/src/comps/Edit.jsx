//import "./login.css";
import { Button, FormControl, FormGroup, InputLabel, Input,makeStyles, Typography } from "@material-ui/core";
import { useContext, useEffect, useRef,useState } from "react";
import { Context } from "../context/Context";
import axios from "axios";
import Posts from "./Posts.jsx";
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
        width:"100%"
    },
    loginbutton: {
        margin: '25px 0px 0px 25px',
        marginTop: '30px'
    },
    title: {
        margin: '25px 0px 0px 25px'
    },
    spanstyle: {
        width:"100%"
    },
    inputstyle: {
        width:"90%",
        marginRight:"5px"
    }
})

export default function Edit() {
    const classes=useStyle();
    const [username,setUsername] = useState("")
    const [email,setEmail] = useState("")
    const [phone,setPhone] = useState("")
    const [password,setPassword] = useState("")
    const [remdeshvir,setRemdeshvir] = useState("")
    const [NoOfBeds,setNoOfBeds] = useState("")
    const [NoOfO2Cylinders,setNoOfO2Cylinders] = useState("")
    const [NoOfVaccines,setNoOfVaccines] = useState("")
    const { user,dispatch } = useContext(Context);
    const handleSubmit1 = async ()=>{
        const updatedUser = {
            userid:user.user._id,
            username,
            email:user.email,
            password:user.password,
            phone:user.phone,
            remdeshvir:user.remdeshvir,
            NoOfBeds:user.NoOfBeds,
            NoOfO2Cylinders:user.NoOfO2Cylinders,
            NoOfVaccines:user.NoOfVaccines
        };
        if(username==="")
        {
            alert("Fill your desired change, can't leave it blank.");
            window.location.href='/edit';
        }
        else{
        dispatch({type:"UPDATE_START"});
        try {
            const res= await axios.put("http://localhost:5000/backend/users/"+user.user._id, updatedUser);
            console.log(res.data);
            dispatch({type:"UPDATE_SUCCESS",payload:res.data});
        } catch (err) {
            dispatch({ type: "UPDATE_FAILURE" });
        }
        alert("Username updated sucessfully!");
        window.location.href='/edit';
    }
    };
    const handleSubmit2 = async ()=>{
        const updatedUser = {
            userid:user.user._id,
            username:user.username,
            email,
            password:user.password,
            phone:user.phone,
            remdeshvir:user.remdeshvir,
            NoOfBeds:user.NoOfBeds,
            NoOfO2Cylinders:user.NoOfO2Cylinders,
            NoOfVaccines:user.NoOfVaccines
        };
        if(email==="")
        {
            alert("Fill your desired change, can't leave it blank.");
            window.location.href='/edit';
        }
        else{
        dispatch({type:"UPDATE_START"});
        try {
            const res= await axios.put("http://localhost:5000/backend/users/"+user.user._id, updatedUser);
            console.log(res.data);
            dispatch({type:"UPDATE_SUCCESS",payload:res.data});
        } catch (err) {
            dispatch({ type: "UPDATE_FAILURE" });
        }
        alert("Email updated sucessfully!");
        window.location.href='/edit';
    }
    };
    const handleSubmit3 = async ()=>{
        const updatedUser = {
            userid:user.user._id,
            username:user.username,
            email:user.email,
            password,
            phone:user.phone,
            remdeshvir:user.remdeshvir,
            NoOfBeds:user.NoOfBeds,
            NoOfO2Cylinders:user.NoOfO2Cylinders,
            NoOfVaccines:user.NoOfVaccines        };
            if(password==="")
            {
                alert("Fill your desired change, can't leave it blank.");
                window.location.href='/edit';
            }
            else{
            dispatch({type:"UPDATE_START"});
            try {
                const res= await axios.put("http://localhost:5000/backend/users/"+user.user._id, updatedUser);
                console.log(res.data);
                dispatch({type:"UPDATE_SUCCESS",payload:res.data});
            } catch (err) {
                dispatch({ type: "UPDATE_FAILURE" });
            }
            alert("Password updated sucessfully!");
            window.location.href='/edit';
        }
    };
    const handleSubmit4 = async ()=>{
        const updatedUser = {
            userid:user.user._id,
            username:user.username,
            email:user.email,
            password:user.password,
            phone,
            remdeshvir:user.remdeshvir,
            NoOfBeds:user.NoOfBeds,
            NoOfO2Cylinders:user.NoOfO2Cylinders,
            NoOfVaccines:user.NoOfVaccines        };
            if(phone==="")
            {
                alert("Fill your desired change, can't leave it blank.");
                window.location.href='/edit';
            }
            else{
            dispatch({type:"UPDATE_START"});
            try {
                const res= await axios.put("http://localhost:5000/backend/users/"+user.user._id, updatedUser);
                console.log(res.data);
                dispatch({type:"UPDATE_SUCCESS",payload:res.data});
            } catch (err) {
                dispatch({ type: "UPDATE_FAILURE" });
            }
            alert("Phone Number updated sucessfully!");
            window.location.href='/edit';
        }
    };
    const handleSubmit5 = async ()=>{
        const updatedUser = {
            userid:user.user._id,
            username:user.username,
            email:user.email,
            password:user.password,
            phone:user.phone,
            remdeshvir,
            NoOfBeds:user.NoOfBeds,
            NoOfO2Cylinders:user.NoOfO2Cylinders,
            NoOfVaccines:user.NoOfVaccines        };
            if(remdeshvir==="")
            {
                alert("Fill your desired change, can't leave it blank.");
                window.location.href='/edit';
            }
            else{
                dispatch({type:"UPDATE_START"});
                try {
                    const res= await axios.put("http://localhost:5000/backend/users/"+user.user._id, updatedUser);
                    console.log(res.data);
                    dispatch({type:"UPDATE_SUCCESS",payload:res.data});
                } catch (err) {
                    dispatch({ type: "UPDATE_FAILURE" });
                }
                alert("Remdeshvir Slots updated sucessfully!");
                window.location.href='/edit';
            }
    };
    const handleSubmit6 = async ()=>{
        const updatedUser = {
            userid:user.user._id,
            username:user.username,
            email:user.email,
            password:user.password,
            phone:user.phone,
            remdeshvir:user.remdeshvir,
            NoOfBeds,
            NoOfO2Cylinders:user.NoOfO2Cylinders,
            NoOfVaccines:user.NoOfVaccines        };
            if(NoOfBeds==="")
            {
                alert("Fill your desired change, can't leave it blank.");
                window.location.href='/edit';
            }
            else{
                dispatch({type:"UPDATE_START"});
                try {
                    const res= await axios.put("http://localhost:5000/backend/users/"+user.user._id, updatedUser);
                    console.log(res.data);
                    dispatch({type:"UPDATE_SUCCESS",payload:res.data});
                } catch (err) {
                    dispatch({ type: "UPDATE_FAILURE" });
                }
                alert("Beds Available updated sucessfully!");
                window.location.href='/edit';
            }
    };
    const handleSubmit7 = async ()=>{
        const updatedUser = {
            userid:user.user._id,
            username:user.username,
            email:user.email,
            password:user.password,
            phone:user.phone,
            remdeshvir:user.remdeshvir,
            NoOfBeds:user.NoOfBeds,
            NoOfO2Cylinders,
            NoOfVaccines:user.NoOfVaccines        };
            if(NoOfO2Cylinders==="")
            {
                alert("Fill your desired change, can't leave it blank.");
                window.location.href='/edit';
            }
            else{
                dispatch({type:"UPDATE_START"});
                try {
                    const res= await axios.put("http://localhost:5000/backend/users/"+user.user._id, updatedUser);
                    console.log(res.data);
                    dispatch({type:"UPDATE_SUCCESS",payload:res.data});
                } catch (err) {
                    dispatch({ type: "UPDATE_FAILURE" });
                }
                alert("Oxygen Cylinders Available updated sucessfully!");
                window.location.href='/edit';
        }
    };
    const handleSubmit8 = async ()=>{
        const updatedUser = {
            userid:user.user._id,
            username:user.username,
            email:user.email,
            password:user.password,
            phone:user.phone,
            remdeshvir:user.remdeshvir,
            NoOfBeds:user.NoOfBeds,
            NoOfO2Cylinders:user.NoOfO2Cylinders,
            NoOfVaccines        
        };
        if(NoOfVaccines==="")
        {
            alert("Fill your desired change, can't leave it blank.");
            window.location.href='/edit';
        }
        else{
            dispatch({type:"UPDATE_START"});
            try {
                const res= await axios.put("http://localhost:5000/backend/users/"+user.user._id, updatedUser);
                console.log(res.data);
                dispatch({type:"UPDATE_SUCCESS",payload:res.data});
            } catch (err) {
                dispatch({ type: "UPDATE_FAILURE" });
            }
            alert("Vaccination Slots updated sucessfully!");
            window.location.href='/edit';
        }
    };
    return (
        <div className={classes.container}>
        <FormGroup className={classes.loginform}>
            <Typography variant="h3" className={classes.title}>Edit Data</Typography>
            <FormControl className={classes.loginform}>
                <span>
                <InputLabel>Username</InputLabel>
                <Input className={classes.inputstyle} type ="text" onChange={e=> setUsername(e.target.value)} name='username'/>
                <Button variant="contained" color="primary" onClick={() => handleSubmit1()}>Update</Button>
                </span>
            </FormControl>
            <FormControl className={classes.loginform}>
                <span>
                <InputLabel>Email</InputLabel>
                <Input className={classes.inputstyle} type="text" id="email" onChange={e=> setEmail(e.target.value)} name='email'/>
                <Button variant="contained" color="primary" onClick={() => handleSubmit2()}>Update</Button>
                </span>
            </FormControl>
            <FormControl className={classes.loginform}>
            <span>
                <InputLabel>Password</InputLabel>
                <Input className={classes.inputstyle} type="password" id="password" onChange={e=> setPassword(e.target.value)} name='password'/>
                <Button variant="contained" color="primary" onClick={() => handleSubmit3()}>Update</Button>
                </span>
            </FormControl>
            <FormControl className={classes.loginform}>
            <span>
                <InputLabel>Phone Number</InputLabel>
                <Input className={classes.inputstyle} type="number" id="phone" onChange={e=> setPhone(e.target.value)} name='phonenumber'/>
                <Button variant="contained" color="primary" onClick={() => handleSubmit4()}>Update</Button>
            </span>
            </FormControl>
            <FormControl className={classes.loginform}>
            <span>
                <InputLabel>Remdeshvir slots</InputLabel>
                <Input className={classes.inputstyle} type="number" id="remdeshvir" onChange={e=> setRemdeshvir(e.target.value)} name='remdeshvir'/>
                <Button variant="contained" color="primary" onClick={() => handleSubmit5()}>Update</Button>
            </span>
            </FormControl>
            <FormControl className={classes.loginform}>
            <span>
                <InputLabel>Number Of Beds Avaialble</InputLabel>
                <Input className={classes.inputstyle} type="number" id="NoOfBeds" onChange={e=> setNoOfBeds(e.target.value)} name='NoOfBeds'/>
                <Button variant="contained" color="primary" onClick={() => handleSubmit6()}>Update</Button>
            </span>
            </FormControl>
            <FormControl className={classes.loginform}>
            <span>    
                <InputLabel>Number Of Oxygen Cylinders Avaialble </InputLabel>
                <Input className={classes.inputstyle} type="number" id="NoOfO2Cylinders" onChange={e=> setNoOfO2Cylinders(e.target.value)} name='NoOfO2Cylinders'/>
                <Button variant="contained" color="primary" onClick={() => handleSubmit7()}>Update</Button>
            </span>
            </FormControl>
            <FormControl className={classes.loginform}>
            <span>    
                <InputLabel>Number Of Vaccines Slots </InputLabel>
                <Input className={classes.inputstyle} type="number" id="NoOfVaccines" onChange={e=> setNoOfVaccines(e.target.value)} name='NoOfVaccines'/>
                <Button variant="contained" color="primary" onClick={() => handleSubmit8()}>Update</Button>
            </span>
            </FormControl>
        </FormGroup>
        </div>
    )
}