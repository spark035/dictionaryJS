const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://spark44:Ryerson123@dictionaryjsstorage.m9dxy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const registerButton = document.getElementById("register-btn");

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;

  client.connect(err => {
    const collection = client.db("LoginInfo").collection("users");

    var query = {name: username, password: password};

    collection.find(query).toArray(function(err,res) {
      if (err) throw err;
      console.log(res);
      window.location.replace("./def.html");
      client.close();
    });
  });
});

registerButton.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.replace("./register.html");
})

