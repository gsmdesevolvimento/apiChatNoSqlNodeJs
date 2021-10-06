import mongoose from 'mongoose';

const ChatSchema = new mongoose.Schema({
  nickname: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  }
});

export default mongoose.model('ChatModel', ChatSchema);
