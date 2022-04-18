const definition = new Definition('space');
const ui = new UI();
// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://spark44:Ryerson123@dictionaryjsstorage.m9dxy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

document.addEventListener('DOMContentLoaded', getDefinition);

function getDefinition(){
  definition.getDefinition()
    .then(results => {
      // var collection = client.db('LoginInfo').collection('recentsearch');
      // let json = JSON.parse(results);
      // collection.findOne({}, function(err, res) {
      //   if (err) {
      //     ui.fill(results);
      //     throw err;
      //   };
      //   ui.fill(res);
      // })
      console.log(results);
      ui.fill(results);
    })
    .catch(err => console.log(err));
}

document.getElementById('w-change-btn').addEventListener('click',(e) => {
  e.preventDefault();
  const query = document.getElementById('word');

  definition.changeQuery(query.value.replace(" ", '%20'));

  // Set query in local storage
  // storage.setDefData(query);
  getDefinition();

  // Closing modal
  $('#locModal').modal('hide');
});
