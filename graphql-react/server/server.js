const express = require('express');
const models = require('./models');
const expressGraphQL = require('express-graphql');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const schema = require('./schema/schema');

const app = express();





// const MongoClient = require('mongodb').MongoClient;


// const uri = "mongodb+srv://fabien:fabien@cluster0-h1ulm.mongodb.net/test?retryWrites=true"
// MongoClient.connect(uri, function(err, client) {
//    if(err) {
//         console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
//    }
//    console.log('Connected...');
//    const collection = client.db("movies_db").collection("movies_collection");
//    // perform actions on the collection object
//    //client.close();
//    console.log("******* Collection" + collection)
// });





// mongodb+srv://fabien:<password>@cluster0-h1ulm.mongodb.net/test?retryWrites=true
// mongodb://robinuser:robinuser@ds245347.mlab.com:45347/dbrobin001
const MONGO_URI = 'mongodb+srv://fabien:fabien@cluster0-h1ulm.mongodb.net/test?retryWrites=true';
if (!MONGO_URI) {
  throw new Error('Tu dois fournir une url mongoDB');
}

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI, 
{ 
  useMongoClient:true
});
mongoose.connection
    .once('open', () => console.log('Connecté à MongoLab'))
    .on('error', error => console.log('Erreur de connexion à MongoLab:', error));





app.use(bodyParser.json());
app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true,
}));

const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');
app.use(webpackMiddleware(webpack(webpackConfig)));

module.exports = app;
