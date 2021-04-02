const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');
const fs = require("fs")
var fileupload = require("express-fileupload");
const app = express();
const upload = multer();

  app.use(fileupload());
  app.use(express.json())
  app.use(express.urlencoded({extended: false}));

  app.use(express.static('public'))
var buffer;
  app.post('/loadfile', (req, res) => {

    console.log("react to post action - loadFile");
    res.redirect('/profile')
  
    var logFile = req.files.fileName;
  
    console.log(logFile);
     buffer = logFile.data;
    console.log(buffer.toString('utf8'));
  
  });
 
app.get('/profile', (req, res) => {
   
        fs.writeFile('buffer', 'utf8', err => {
             if (err) throw err;
             console.log('Data successfully written to a file. ');
        })  
  
    res.send('Data successfully written to a file. ' + '' + buffer.toString('utf8'))
})







var port = process.env.PORT || 3000;
app.listen(port, () => console.log(`server currently running on ${port}`))