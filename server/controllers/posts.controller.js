const {Posts} = require("../models")

// create post
const createPost = async(req, res) => {
    const post = req.body;
    await Posts.create(post);
    res.status(201).json({
        message: "Posts created",
        success: true,
        data: post
    })
}

// get all posts

const getAllPosts = async(req, res) => {
    const posts = await Posts.findAll();
    res.json(posts);
}

// get single post

const getPost = async(req, res) => {
    const {id} = req.params;
    const post = await Posts.findByPk(id);
    if(!post) {
       return res.status(404).json({message: `post with the id ${id} not found!.` })
    }
    
    return res.status(200).json(post);
}

module.exports = {createPost, getAllPosts, getPost}