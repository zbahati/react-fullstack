const express = require("express");
const {createPost, getAllPosts, getPost} = require("../controllers/posts.controller");

const PostsRoutes = express.Router();

PostsRoutes.post('/', createPost);
PostsRoutes.get('/', getAllPosts);
PostsRoutes.get('/:id', getPost);

module.exports = PostsRoutes