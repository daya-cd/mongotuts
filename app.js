/**
 * Main file of the application.
 * Initializes the application and starts the server.
 */

 var express = require('express');
 cons=require('consolidate');
 MongoClient = require('mongodb').MongoClient;
 assert=require('assert');
 app = express();


 app.engine('html',cons.nunjucks);
 app.set('view engine','html');
 app.set('views',__dirname+'/views');



 /* Mongo db connection*/
 var URL = 'mongodb://localhost:27017/videos';



 MongoClient.connect(URL, function(err, db) {

 	assert.equal(null,err);
 	console.log("successfully connected  to MongoDB.");
 	var collection = db.collection('movies');


 	app.get('/',function(req,res){
 		collection.find({}).toArray(function(err, docs) {
 			res.render('movies',{'movies':docs});
 			db.close()
 		});
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

});



