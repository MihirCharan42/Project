import { makeStyles } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import Posts from "./Posts.jsx";
const useStyle= makeStyles({
    container: {
        alignItems: 'center',
        width:'50%',
    }
})

export default function Page() {
    const [posts, setPosts] = useState([]);
    const classes= useStyle();
    useEffect(() => {
        const fetchPosts= async () =>{
            const res = await axios.get("http://localhost:5000/backend/users/?")
            setPosts(res.data);
        }
        fetchPosts()
    },[])
    return(
        <div className="classes.container">
            <Posts className="classes.container" posts={posts}/>
        </div>
    )
}