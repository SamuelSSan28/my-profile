const path = require('path');
const express = require('express');
 
const app = express();

const baseDir = `${__dirname}/build/`
app.use(express.static(`${baseDir}`))
app.get('*', (req, res) => res.sendFile('index.html' , { root : baseDir } ))

app.set('port', process.env.PORT || 3000);
 
const server = app.listen(app.get('port'), function() {
  console.log('listening on port ', server.address().port);
});