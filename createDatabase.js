const mongoose = require('mongoose')       //importing mongoose here. 

mongoose.connect('mongodb://PranshuKumar:Pranshu2002@getyoutubesubscriber-shard-00-00.hoh74.mongodb.net:27017,getyoutubesubscriber-shard-00-01.hoh74.mongodb.net:27017,getyoutubesubscriber-shard-00-02.hoh74.mongodb.net:27017/?ssl=true&replicaSet=atlas-fc8vx6-shard-0&authSource=admin&retryWrites=true&w=majority&appName=getyoutubesubscriber',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })  // giving a connection string here.

const db = mongoose.connection; // Get the database connection object

db.on("error", (err) => console.log(err)); // Event listener for connection errors
db.once("open", () => 
    console.log("Database created...")); // Event listener for successful connection
