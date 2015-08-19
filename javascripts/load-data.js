define(function (require) {
	var firebase = require("firebase");

	var myFirebase = new Firebase("https://nss-seth-trippin.firebaseio.com");
    
    myFirebase.child("trips").on("value", function(snapshot) {
      var trips = snapshot.val();
      console.log(trips);
    });

});