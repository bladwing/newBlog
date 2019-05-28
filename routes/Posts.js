const express = require('express');
const Router= express.Router();
const Controller = require('../controllers/blogposts')
const Model = require('../models/blogposts')


function routes(Blogpost){
    const controller = Controller(Blogpost);

Router.route('/blogposts/')
    .get(controller.get)
    .post(controller.post);

Router.route("/blogposts/:id")
    .get( (req, res) => {
        Model.findOne( {id:req.params.id},(err,post) => res.send(post))
    })

    return Router;
}
// Router.get('/', async (req, res) => {
//   const posts = await Post.find({})
//   res.status(200).json(posts)

// })
module.exports = routes;