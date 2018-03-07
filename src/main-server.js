/**
 * 
 */

//Install express server
const express = require('express');
const app = express();

// Serve only the static files form the dist directory
app.get('*', function(req,res) {
	res.sendfile('./src/app/app.component.html');
})

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080 ,() => console.log('server listening'));