const express = require('express')
var NodeMailer = require('./helper/node-mailer')
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')
const path = require('path')
const app = express();

require('dotenv').config()
const PORT = process.env.PORT || 3000;

//setting view engine
app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')
app.set('views',path.join(__dirname, 'views'));
//Static file
app.use('/public', express.static(path.join(__dirname,'public')))


//Body Parser middleware
app.use(bodyParser.urlencoded({ extended : false }))
app.use(bodyParser.json())

app.get('/', (req,res) => {
    res.render('contact', {layout : false})
})

app.post('/send', (req,res) => {
    NodeMailer(req,res);
    res.send('success')
    //res.render('contact', {layout : false} , {msg: 'Email has been seen...'} )
})

app.listen(PORT , () => {
    console.log(`Server is running port ${PORT}`)
})
