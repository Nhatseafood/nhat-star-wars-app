var express = require('express');
var app = express();
app.set('view engine', 'ejs');


var routes = require('./routes');

var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
//routes

// home
app.get('/', routes.home);


//movie single
app.get('/star_wars_episode/:episode_number?', routes.movie_single);

//not found
app.get('*', routes.notFound);


app.listen(3000, function() {
    console.log("The application is running on localhost. 3000")
});




