
import { dbconnection } from "../database/dbconnection.js"
import bcrypt from "bcrypt"

const connection=dbconnection()

export const checkEmailExist=(req,res,next)=>{



    connection.execute(`select email from users where email='${req.body.email}'`,(err,data)=>{

        if(data.length!=0)return res.status(409).json({message:"email already exists."})

            req.body.password = bcrypt.hashSync (req.body.password,8) 

            next()
    })

}