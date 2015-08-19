define(function (require) {
	var firebase = require("firebase");
	var $ = require("jquery");
	var templates = require("get-templates");

	var myFirebase = new Firebase("https://nss-seth-trippin.firebaseio.com");
    
    myFirebase.child("trips").on("value", function(snapshot) {
      var trips = snapshot.val();
      console.log(trips);

	//This will hold the complete DOM string of trips
      var populatedTemplate = templates.tripTemplate(trips);
      
	//Insert the DOM string into the appropriate element
      $("#list-of-trips").html(populatedTemplate);
    });

});