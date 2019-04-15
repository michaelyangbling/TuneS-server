const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema(
  {
    _id: String, // spotify subject id
    type: String,
    title: String,
    image: String,
    likeCount: Number,
    intro: String //album intro
  },
  { 
    collection: 'subjects', 
    timestamps: true 
  }
);

module.exports = subjectSchema;