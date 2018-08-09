/**
 * 
 */

//Install express server
const express = require('express');
const app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var http = require('http');
var fs = require('fs');
var request = require('request');

app.use(cors({credentials: true, origin:true}));
app.use(bodyParser.urlencoded({extended:true}));

/*app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});
*/


//keys
var apikey = 'QBz1LovHvGVgZSyVRPCopquJR';
var apiSecretKey = 'Hsn80lHNgpsKXKvKnCojn1JJ29GuHXMVmo3CVpJLXjEFn97jKB';
var bearertoken = "";

//Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist'));

//sends request to twitter api with encoded key to get access token
function authorize(req, res) {
	//encoding keys
	var header = apikey + ':' + apiSecretKey;
	var encheader = new Buffer(header).toString('base64');
	var finalheader = 'Basic ' + encheader;
	
	//call twitter api to get bearer token
	request.post('https://api.twitter.com/oauth2/token', {form: {'grant_type': 'client_credentials'},
		headers: {Authorization:finalheader}}, function(error, response, body) {
			if (error) {
				console.log("Error: " + error);
			}
			else {
				console.log("successfully got access token!");
				bearertoken = JSON.parse(body).access_token;
				res.json({success: true, data:bearertoken});
				
			}
		});
}


//Calls twitter api to get tweets and reeturns in body of HTTTP
function getTweets(req,res) {
	
	//if bearer token undefined then return
	if(bearertoken === ""){
		console.log("Bearer token undefined");
	}
	else {
		var header = 'Bearer '  + bearertoken;
		
		//make api call with bearer token
		request.get('https://api.twitter.com/1.1/statuses/user_timeline.json?count=30&tweet_mode=extended&screen_name=realdonaldtrump', {headers: {Authorization: header}}, function(error, body, response) {
			if(error){
				console.log(error);
			}
		    else {
		    	//convert body into JSON object then send it in response
		    	var jsonBody = JSON.parse(body.body);
		    	res.json({success: true, data:jsonBody});
		    }
		  })
	}
}


app.post('/authorize', function(req,res) {
	authorize(req,res);
});

app.post('/search', function(req,res) {
	getTweets(req,res);
})





// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080 ,() => console.log('server listening'));
