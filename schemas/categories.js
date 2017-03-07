var mongoose = require ('mongoose');
module.exports = new mongoose.Schema({
  time:String,
  sender:String,
  senderEmail: String,
  receiver:String,
  receiverEmail: String,
  amount: String,
  message: String,
  reason: String
})
