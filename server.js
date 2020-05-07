
// Libraries
const express = require('express');
const nunjucks = require('nunjucks');
const database = require('./database');
const app = express();


// Configuring html template settings
nunjucks.configure('views', {
  autoescape:true,
  express:app,
});


// Telling express where the html templates are
app.set('views','./views');


// Telling express where the static files are
app.use('/static', express.static('./static'));


// Telling express to render a template the
// specified url
app.get('/songs/:id', async (req,res) => {

  // Try to fetch a song from the database
  const id = req.params.id;
  const song = await database.getSongById(id);

  if (song) {
    res.render('song.html', song);
  } else {
    res.render('404.html');
  }
});


// Starting the app
const port = 3000;
app.listen(port, () => console.log('Listening on port:', port));

