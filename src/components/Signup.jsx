import react from "react"
import {useState} from "react";
import {addUser} from "../api";
const defaultVal = {
    "name":"",
    "city":"",
    "age":""
}
const Signup = ()=>{

    const [user,setUser] = useState(defaultVal);

    const handleChange = (e)=>{
        setUser ({...user,[e.target.name]:e.target.value})
        console.log(user);
    }
    const handleClick = ()=>{
        addUser(user);
    }

    const handleReset = ()=>{
        setUser(defaultVal);
    }
    return (
        <div style = {{width:"10vw"}}>
        <label>Name</label>
        <input onChange = {(e)=>handleChange(e)} name ="name"></input>
        <label>City</label>
        <input onChange = {(e)=>handleChange(e)} name ="city"></input>
        <label>Age</label>
        <input onChange = {(e)=>handleChange(e)} name ="age"></input>
        <button onClick = {handleClick}>Submit</button>
        <button onClick = {handleReset} >Reset</button>
        </div>
    )
}

export default Signup;