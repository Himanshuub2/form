import react from "react"
import {useState} from "react";

const defaultVal = {
    "name":"",
    "city":"",
    "age":""
}
const Signup = ()=>{

    const [user,setUser] = useState(defaultVal);

    const handleChange = (e)=>{
        setUser ({...defaultVal,name:e.target.value})
        console.log(user);
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
        </div>
    )
}

export default Signup;