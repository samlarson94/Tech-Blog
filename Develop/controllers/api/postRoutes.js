const router = require('express').Router();
const { User, Post } = require('../../models');
const withAuth = require('../../utils/auth');

// Get all posts - endpoint /api/post

router.get('/', async (req, res) => {
  try {
    // Get all posts and JOIN with user data
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          // attributes: ['author_name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const posts = postData.map((post) => post.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.json(posts)
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//Create new Post - added withAuth to guard route
  //Endpoint api/post
router.post('/', async (req, res) => {
  console.log(req.body)  
  try {
      
      const newPost = await Post.create(req.body);
      //   {
      //   // ...req.body,
      //   // user_id: req.session.user_id,
      // }
      // );
  
      res.status(200).json(newPost);
    } catch (err) {
      res.status(400).json(err);
    }
  });

//Delete a Post by Id
  router.delete('/:id', withAuth, async (req, res) => {
    try {
      const postData = await Post.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!postData) {
        res.status(404).json({ message: 'No post found with this id!' });
        return;
      }
  
      res.status(200).json(postData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
  module.exports = router;