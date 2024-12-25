
import { Router } from "express";
import { addPost, deleteUser, getAllPosts, getSinglepost, getUserposts, updateUser } from "./posts.controller.js";



const postsRouter =Router()

postsRouter.post('/',addPost)
postsRouter.get('/',getAllPosts)
postsRouter.get('/:id',getSinglepost)
postsRouter.get('/me/:id',getUserposts)
postsRouter.put('/:id',updateUser)
postsRouter.delete('/:id',deleteUser)



export default postsRouter
