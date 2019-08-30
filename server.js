var express = require('express')
var app = express()
const path = require('path')
var bodyParser = require('body-parser')

var controllerRouter = require('./routes/tarea')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')
app.use(express.static(path.join(__dirname, 'public')))

app.use('/tarea', controllerRouter)

app.get('/', function (req, res) {
  res.render('index')
})

app.listen(3010, function () {
  console.log('Example app listening on port 3010!')
})


