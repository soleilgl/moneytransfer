var cool = require('cool-ascii-faces');
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();
var pg = require('pg');

app.use(bodyParser.urlencoded({extended:true}));

app.get('/db', function (request, response) {
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    client.query('SELECT * FROM test_table', function(err, result) {
      done();
      if (err)
       { console.error(err); response.send("Error " + err); }
      else
       { response.render('pages/db', {results: result.rows} ); }
    });
  });
});

mongoose.connect('mongodb://soleilgl:cathay03368@ds113630.mlab.com:13630/heroku_37zz0hxd', function(err)
{
  if(err)
  {
    console.log('failed');
  }else
    {
      console.log('success');
    }
  });

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/aboutmyself', function(request, response) {
  response.render('pages/myselfindex');
});

app.get('/game', function(request, response) {
  response.render('pages/gameindex');
});

app.get('/game/piggiegame', function(request, response) {
  response.render('pages/Piggiegame');
});

app.get('/game/tetrisgame', function(request, response) {
  response.render('pages/Tetrisgame');
});

// app.get('/cool', function(request, response) {
//   response.send(cool());
// });

app.use('/nodejs', require('./routers/initialscreen'));
app.use('/nodejs/sendMoney', require('./routers/sendMoney'));
app.use('/nodejs/viewHistory', require('./routers/viewHistory'));
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
