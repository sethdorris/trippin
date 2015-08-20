define(function (require) {
	var firebase = require("firebase");
	var $ = require("jquery");
	var templates = require("get-templates");


	var myFirebase = new Firebase("https://nss-seth-trippin.firebaseio.com");
    
	myFirebase.child("location_types").on("value", function(snapshot) {  
		var location_types = snapshot.val();
		console.log(location_types);  
		//Passes location types from Firebase through the template to populate select box
		var populatedSelect = templates.locTypeTemplate(location_types);
		//Populates Select Box
		$("#locationType").html(populatedSelect);
	});

    myFirebase.child("trips").on("value", function(snapshot) {
      var trips = snapshot.val();
      console.log("trips", trips);

	//This will hold the complete DOM string of trips
      var populateVisitedTemplate = templates.tripTemplate(trips);
      var populateWishlistTemplate = templates.wishlistTemplate(trips);
      
	//Insert the DOM string into the appropriate element
      $("#list-of-trips").html(populateVisitedTemplate);
      $("#wishlist").html(populateWishlistTemplate);
    });

});