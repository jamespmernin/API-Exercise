const db = require('../db/connection');
const Post = require('../models/post');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {
  const posts =
    [
      {
        "title": "Post 1",
        "imgURL": "https://images.unsplash.com/photo-1602281892635-c96d2571e770?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixlib=rb-1.2.1&q=80&w=800",
        "content": "This is a blog post.",
        "author": "Joe Schmoe"
      },
      {
        "title": "Post 2",
        "imgURL": "https://images.unsplash.com/photo-1603243640119-497928a4fba4?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixlib=rb-1.2.1&q=80&w=800",
        "content": "This is a second blog post.",
        "author": "Jane Doe"
      },
      {
        "title": "Post 3",
        "imgURL": "https://images.unsplash.com/photo-1602809096240-0c89916a2676?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixlib=rb-1.2.1&q=80&w=800",
        "content": "This is a third blog post.",
        "author": "James Bond"
      },
      {
        "title": "Post 4",
        "imgURL": "https://images.unsplash.com/photo-1603094547463-01cc60c4635f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixlib=rb-1.2.1&q=80&w=800",
        "content": "This is a fourth blog post.",
        "author": "Sylvia Plath"
      },
    ];
  await Post.insertMany(posts);
  console.log("Created posts!");
}
const run = async () => {
  await main();
  db.close();
}

run();