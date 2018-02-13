/**
 * 
 */

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var http = require('http');
var fs = require('fs');
var request = require('request');

var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

//keys
var apikey = 'QBz1LovHvGVgZSyVRPCopquJR';
var apiSecretKey = 'Hsn80lHNgpsKXKvKnCojn1JJ29GuHXMVmo3CVpJLXjEFn97jKB';
var bearertoken = "";

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
		request.get('https://api.twitter.com/1.1/statuses/user_timeline.json?count=30&screen_name=bestnewapps2015', {headers: {Authorization: header}}, function(error, body, response) {
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

app.listen(3000, () => console.log('Example app listening on port 3000!'))