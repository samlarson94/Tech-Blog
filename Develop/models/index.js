const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// User hasMany Post
User.hasMany(Post, {
    foreignKey: 'user_id',
    // onDelete: 'CASCADE'
});

// Post belongsto User
Post.belongsTo(User, {
    foreignKey: 'user_id'
});

// Post hasMany Comment 
Post.hasMany(Comment, {
    foreignKey: 'post_id',
    // onDelete: 'CASCADE'
});

// Comment belongsto Post
// Comment.belongsTo(Post, {
//     foreignKey: 'id',
// });

// User hasMany Comment
// User.hasMany(Comment, {
//     foreignKey: 'comment_author',
//     // onDelete: 'CASCADE'
// });

// Comment belongsto User
Comment.belongsTo(User, {
    foreignKey: 'comment_author',
});


module.exports = { User, Post, Comment };