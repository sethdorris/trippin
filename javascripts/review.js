define(function (require) {
	var $ = require('jquery');
	var firebase = require('firebase');
	var selectedID;



	$(document).on("click", "button[id^='add-review#']", function() {
		selectedID = $(this).attr("id").split("#")[1];
		$(".reviewEntry").toggle();
	});

	$("#saveReview").click(function () {
		var tripRef = new Firebase("https://nss-seth-trippin.firebaseio.com/trips/" + selectedID);

		console.log("FUCK");

		tripRef.child("reviews").push({
			date: Date.now(),
			text: $("#reviewEntry").text(),
			title: "Title"
		});
	});

});