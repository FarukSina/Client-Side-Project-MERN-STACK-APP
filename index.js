require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const port = process.env.PORT || 4000;
const path = require("path");


// Mongo access
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}).catch(err => console.error(`Error: ${err}`));

// Implement Body Parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// register the routes
const routes = require('./routes');
const router = routes(express.Router());
app.use(router);

// error handling
const { handle404s, errorHandler } = require('./errorHandling');
//app.use(handle404s);
app.use(errorHandler);

// Heroku Build static if its in production mode

if(process.env.NODE_ENV === "production"){
  // Static Folder
  app.use(express.static('client/build'))
  
  app.get('*', (req,res)=>{
    res.sendFile(path.resolve(__dirnamem, "client", "build", "index.html"))
  })
}

app.listen(port, () => console.log(`Always watching... on port ${port}`));