function blogpostsController(Blogpost){
    function post(req, res){
       
        const blogpost = new Blogpost(req.body);
        if ( !req.body.title ){
            res.status(400);
            return res.send("Title is required");
        }
        blogpost.save();
        res.status(201);
        return res.json(blogpost);
    }

    function get(req, res){
        const query = {}

        // if( req.query.genre ){
        //     query.genre = req.query.genre;
        // }

        Blogpost.find(query, (err, blogposts) => {
            if( err ) {
                return res.send(err);
            }
            const foundBlogposts = blogposts.map( blogpost => {
                const newBlogpost = blogpost.toJSON()
                return newBlogpost;
            })

            return res.json(foundBlogposts);
        });
    }

    return { post, get }
}

module.exports = blogpostsController;