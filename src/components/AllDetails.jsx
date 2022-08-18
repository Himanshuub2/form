
import react from "react"
import {useState,useEffect} from "react";
import {getUsers} from "../api.js";

const AllDetails = ()=>{
    const [user,getUser] = useState([]);

    const userdet = async()=>{
        const response = await getUsers();
        const newres = response.data;
        getUser(newres);
        console.log(user);
    }
    
    useEffect(()=>{
      
        userdet()
    },[])
    return (
        <>
        <p>Hello</p>
       <table>
        <tr>
            <th>Name:{user.map(item=>item.name)}</th>
            <th>city</th>
            <th>Age</th>

        </tr>
       </table>
        {/* <button onClick = {(e)=>handleClicked(e)}>Get</button> */}
        </>
    )
}

export default AllDetails;