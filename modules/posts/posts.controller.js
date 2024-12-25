
import { dbconnection } from "../../database/dbconnection.js";
const conn=dbconnection()

const addPost=(req,res)=>{
    conn.query(`insert into posts set ?`,req.body)
    res.status(201).json({message:"success"})
}


const getAllPosts =(req,res)=>{
    conn.execute(`select users.id,users.name,posts.id as postId,posts.title,posts.description from users join posts on users.id=posts.users_id `,(err,data)=>{
        res.status(200).json({message:"success", allposts:data})
    })

}



const getSinglepost =(req,res)=>{
    conn.execute(`select users.id,users.name,posts.id as postId,posts.title,posts.description from users join posts on users.id=posts.users_id where posts.id=${req.params.id} `,(err,data)=>{
        res.status(200).json({message:"success", post:data})
    })

}


const getUserposts =(req,res)=>{
    conn.execute(`select users.id,users.name,posts.id as postId,posts.title,posts.description from users join posts on users.id=posts.users_id where users.id=${req.params.id} `,(err,data)=>{
        res.status(200).json({message:"success", posts:data})
    })

}

const updateUser = (req,res)=>{
    conn.query('update posts set ? where id=?',[req.body,req.params.id])
    res.status(200).json({message:"success"})
}


const deleteUser = (req,res)=>{
    conn.query('delete from posts where id=$[req.params.id]')
    res.status(200).json({message:"success"})

}
export {
    addPost,
    getAllPosts,
    getSinglepost,
    getUserposts,
    updateUser,
    deleteUser
}