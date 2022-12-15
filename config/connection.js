const { connect, connection } = require('mongoose');
//pretty sure i want to add this code into so when I am testing it doesn't keep adding data
// mongoose.connect('mongodb://localhost/mydatabase',function(){
//     /* Drop the DB */
//     mongoose.connection.db.dropDatabase();

connect('mongodb://localhost/videosAndResponses', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
