
/*https://hackhands.com/mongodb-crud-mvc-way-with-passport-authentication/*/
var express=require('express');
var app=express();
var port=process.env.PORT || 3000;
var bodyParser=require('body-parser');
var mongoose=require('mongoose');
var fs=require('fs');


app.use(express.static(__dirname+'/client/'));


mongoose.connect('mongodb://localhost:27017/mongooseapp');

mongoose.connection.on('open', function (ref) {
    console.log('Connected to mongo server.');
    
   
});

fs.readdirSync(__dirname+'/server/models').forEach(function(filename){
	if(~filename.indexOf('.js')){
		require('./server/models/'+filename);
	}

})



app.use(bodyParser.json());
/*********Entry Point**********/
/*app.get('/',function(req,res){
	//console.log(__dirname);
	res.sendfile(__dirname+'/client/index.html');

})

app.post('/api/users',usersController.create)*/
var routes = require('./routes')(app); 

app.listen(port,function(req,res){
	console.log('server is running on port:'+port);
})