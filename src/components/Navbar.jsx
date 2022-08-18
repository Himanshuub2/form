
import {Link } from "react-router-dom";
import react from "react";
const Navbar = ()=>{
    return (
        <div style = {{height:"10vh",borderBottom:"2px solid black",background:"#C4D7E0",display:"flex",flexDirection:"column"}}>
            <ul style = {{display:"flex",flexDirection:"row",justifyContent:"space-evenly"}}>
                <li style ={{marginBottom:"5px",fontSize:"30px",color:"white"}}>
                    <Link to ="/">Home</Link>
                </li>
                <li style ={{marginBottom:"5px",fontSize:"30px",color:"white"}}>
                    <Link to = "/signup">Signup</Link>
                </li>
                <li style = {{marginBottom:"5px",fontSize:"30px",color:"white"}}>
                    <Link to = "/all" >AllDetails</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;