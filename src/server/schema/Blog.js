import mongoose from 'mongoose'

const blog = new mongoose.Schema({
  title: String,
  body: String,
  created: { type: Date, default: Date.now }
});

export default mongoose.model('blog', blog);
