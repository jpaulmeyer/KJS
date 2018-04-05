const helmet = require('helmet')
var express = require('express');
var stylus = require('stylus')
var nib = require('nib')
var bodyParser = require('body-parser')
const path = require('path')
const favicon = require('serve-favicon')


var app = express();
app.use(helmet())
app.set('view engine', 'pug')


function compile(str, path) {
    return stylus(str)
        .set('filename', path)
        .use(nib())
}

app.use(stylus.middleware({
    src: __dirname + '/public',
    compile: compile
}))
app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json())

//ROUTES
app.get('/', function(req,res){
    res.render('index', {})
})
app.get('/whatwedo', function(req,res){
    res.render('whatwedo', {})
})
app.get('/howitworks', function(req,res){
    res.render('howitworks', {})
})
app.get('/getstarted', function(req,res){
    res.render('getstarted', {})
})
app.get('/contactus', function(req,res){
    res.render('contactus', {})
})
app.get('/part2', function(req,res){
    res.render('part2', {})
})

app.listen(3300, function () {
	console.log('Example app listening on port 3300!');
});