define(function (require) {
	var $ = require('jquery');
	var firebase = require('firebase');
	var selectedID;



	$(document).on("click", "button[id^='add-review#']", function() {
		selectedID = $(this).attr("id").split("#")[1];
		$(".reviewEntry").toggle();
		$(this).hide();
	});

	$(document).on("click", "#saveReview", function () {
		var tripRef = new Firebase("https://nss-seth-trippin.firebaseio.com/trips/" + selectedID);

		console.log("FUCK");

		var date = new Date();
		var day = date.getDate();
		var month = date.getMonth();

		switch (month) {
			case 7:
			month = "August";
			break;
		}

		console.log(month);

		tripRef.child("reviews").push({
			date: month + " " + date.getDate(),
			text: $("#reviewEntry").val(),
			title: "Title"
		});
	});

});