const express = require('express')
const expressHandlebars = require('express-handlebars')

const app = express()

app.engine('hbs', expressHandlebars({
  defaultLayout: 'main.hbs',
}))


// Retrieve all accounts.

const users= [{
	id: 0,
	username: "Alice",
	password: "abc123"
}, {
	id: 1,
	username: "Bob",
	password: "abc123",
}, {
	id: 2,
	username: "Claire",
	password: "abc123"
}]



app.get('/', function(request, response){
 response.render("home.hbs")
})

app.get('/about', function(request, response){
  response.render("about.hbs")
 })
 app.get('/contacts', function(request, response){
  response.render("contacts.hbs")
 })
 




 app.get('/accounts/:id', function(request, response){
  const id = request.params.id
  const user = users.find(
    a => a.id == id
    )
    const model={
      user
      }
    response.render("searchacc.hbs",model)
 })






 app.get('/accounts', function(request, response){
  const model={
  users
  }
  response.render("accounts.hbs",model)
 })


app.listen(8080)