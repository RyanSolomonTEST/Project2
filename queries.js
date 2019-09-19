/* Add all the required libraries*/
var mongoose = require('mongoose');
var ListingSchema = require('./ListingSchema.js');
var configFile = require('./config.js');

/* Connect to your database using mongoose - remember to keep your key secret*/
mongoose.connect(configFile.db.uri, { useNewUrlParser: true });

/* Fill out these functions using Mongoose queries*/
//Check out - https://mongoosejs.com/docs/queries.html

var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
   ListingSchema.findOne({name: "Library West"}, function(err, data){

      if(err){
        throw err;
      }
      console.log("Found Library West!");
      console.log(data);
   })
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
  ListingSchema.findOneAndRemove({code: "CABL"}, function(err, data){

    if(err){
      throw err;
    }
    console.log("Deleted document with code CABL")
    console.log(data);
  })
};
var updatePhelpsLab = function() {
  /*
    Phelps Lab address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
  ListingSchema.findOneAndUpdate({code: 'PHL'}, {address: "1953 Museum Rd, Gainesville, FL 32603"}, 
  function(err, data){
    if (err){
      throw err;
    }
    console.log("Updated Phelps Lab address"),
    console.log(data);
  })
};
var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
  ListingSchema.find({}, function(err, data){

    if(err){
      throw err;
    }
    console.log("Printing all listings!");
    console.log(data);
  })
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
