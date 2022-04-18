const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://spark44:Ryerson123@dictionaryjsstorage.m9dxy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const registerForm = document.getElementById('register-form');
const registerSubmit = document.getElementById('register-form-submit');
const registerSuccess = document.getElementById('register-success');
const registerFail = document.getElementById('register-fail');

client.connect(err => {
  const collection = client.db("mydb").collection("customers");
  const username = registerForm.username.value;
  const password = registerForm.password.value;
  var query = { name: username, password: password };

  collection.find(query).toArray(function(err,res) {
    if (err) {
      alert("User already registered!");
      throw err;
    }
  });

  collection.insertOne(query, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    client.close();
  });

});