const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
    unique: true,
  },
  author: {
    type: String,
    required: true,
  },
  imagesUrl: {
    type: String,
    // required: true,
  },
  imagesAlt: {
    type: String,
    required: true,
  },
  metaDescription: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Blog = mongoose.model("Blog", BlogSchema);
module.exports = Blog;
