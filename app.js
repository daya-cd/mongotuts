/**
 * Main file of the application.
 * Initializes the application and starts the server.
 */

var express = require('express');
    cons=require('consolidate');
    mongodb=require('mongodb');
    app = express();


app.engine('html',cons.nunjucks);
app.set('view engine','html');
app.set('views',__dirname+'/views');

app.get('/',function(req,res){
	res.render('hello',{'name':'Templates'});
});

app.use(function(req,res)
{
 res.sendStatus(404);
});

//starts the server
var port = process.env.PORT || 3000;
app.listen(port, function() {
	console.log('Express server listening on port : ' + port);
});