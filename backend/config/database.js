// Connect to MongoDB using Mongoose
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Supriya:Singh@cluster0.6r1yal4.mongodb.net/Nykaa?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
