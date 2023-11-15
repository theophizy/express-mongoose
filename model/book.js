const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//const ObjectId = Schema.ObjectId;

const BookModelSchema = new Schema({
  title:{
    type: String,
    required:true
  } ,
year:{
    type: Number,
    required:true,
    max: [2023,'Year must be less than 2023']
  },
  isbn:{
    type: String,
    required:true,
     },
  createAt: {
    type : Date,
    default: Date.now()
  },
  updateAt: {
    type : Date,
    default: Date.now()
  }
});
module.exports = mongoose.model("books",BookModelSchema)