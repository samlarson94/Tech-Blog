const User = require('./User');
// const Project = require('./Project');

// User.hasMany(Project, {
//   foreignKey: 'user_id',
//   onDelete: 'CASCADE'
// });

//User hasMany Post
User.hasMany(Post, {
    foreignKey: 'id',
    onDelete: 'CASCADE'
});

// Post belongsto User

// Post hasMany Comment 

// Comment belongsto Post

// Project.belongsTo(User, {
//   foreignKey: 'user_id'
// });

//

module.exports = { User };