
import {db,Tasks} from "./db/db.js";


export const  addUser = async (req,res)=>{
    try{
        console.log(req.body.name);
        const newUser = await Tasks.create({
            name:req.body.name,
            city:req.body.city,
            age:req.body.age,
        })
        res.status(201).send(newUser);

        
    }catch(error){
        console.log("error with db controller",error);
    }
} 

export const getUser = async(req,res)=>{
    try{
       const Userdata = await Tasks.findAll({});
       res.status(201).send(Userdata);
       console.log(Userdata);
       console.log("hello");
    }catch(error){
        res.status(404).send({message:error.message})
    }

}