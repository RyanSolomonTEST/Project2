'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    listing = require('./ListingSchema.js'), 
    config = require('./config'),
    listingsJSON = require('./listings.json');


/* Connect to your database using mongoose - remember to keep your key secret*/
mongoose.connect(config.db.uri, { useNewUrlParser: true });




/* 
Reads in listing file then creates new listing object according
to schema
 */

fs.readFile('./listingsJSON', 'utf8', function(err, data){

  for(var i = 0; i < listingsJSON.entries.length; i++){
    var newListingData = listing({
      code: listingsJSON.entries[i].code,
      name: listingsJSON.entries[i].name,
      coordinates: listingsJSON.entries[i].coordinates,
      address: listingsJSON.entries[i].address
    });


newListingData.save(function(err){
  if(err){
    throw err;
  }
})
}

})

  


 

/*  
  Check to see if it works: Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */