import "./post.css";

export default function Post({post}) {
    return (
        <div className="post">
            <div className="postinfo">
                <div className="postnames"> <h1 className="postname"> {post.username} </h1></div>
                <div className="postphones"><h3 className="posthone">+91-{post.phone} </h3></div>
                <div className="postusernames"><span className="postusername">No of Remdeshvir Injections Available: {post.remdeshvir} </span></div>
                <div className="postusernames"><span className="postusername">No of Beds Available: {post.NoOfBeds} </span></div>
                <div className="postusernames"><span className="postusername">No of Oxygen Cylinders Available: {post.NoOfO2Cylinders} </span></div>
                <div className="postusernames"><span className="postusername">No of Vaccinations shots Available: {post.NoOfVaccines} </span></div>
            </div>
        </div>
    )
}