const sequelize = require('../config/connection');
const { User, Post} = require('../models');

const userData = require('./userData.json');
const postData = require('./postData.json');
const commentData = require('./commentsData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

console.log(users);

  for (const post of postData) {
    await Post.create({
      ...post, //Spread Operator
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
    console.log(postData);
  }

  process.exit(0);
};

seedDatabase();