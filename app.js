var express = require('express');
var app = express();
var path = require('path');


const PORT = process.env.PORT || 5000


app.set('views', path.join(__dirname, 'views'))

var routes = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));
//routes

// home
app.get('/', routes.home);


//movie single
app.get('/star_wars_episode/:episode_number?', routes.movie_single);

//not found
app.get('*', routes.notFound);


app.listen(PORT, () => console.log(`Listening on ${ PORT }`))





