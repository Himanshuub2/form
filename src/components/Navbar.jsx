
import {Link } from "react-router-dom";
import react from "react";
const Navbar = ()=>{
    return (
        <div style = {{height:"10vh",borderBottom:"2px solid black",background:"blue"}}>
            <ul>
                <li style ={{marginBottom:"5px",fontSize:"30px",color:"white"}}>
                    <Link to ="/">Home</Link>
                </li>
                <li style ={{marginBottom:"5px",fontSize:"30px",color:"white"}}>
                    <Link to = "/signup">Signup</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;