import mongoose from 'mongoose'

const UserModelSchema = mongoose.Schema({
  "name":String,
   "email":String,
   "password":String,
   "links":Array,
})
export default mongoose.model('user', UserModelSchema); 
