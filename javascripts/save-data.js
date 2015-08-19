define(function (require) {
	var $ = require("jquery");
	var visited = false;

	$("#visited").click(function () {
		visited = true;
	});

	$("#wishList").click(function () {
		visited = false;
	});

	$("#addLocation").click(function () {
		var newLocation = {
			location: $("#locationName").val(),
			location_type: $("#locationType").val() || "city",
			visited: visited
		};

		console.log(newLocation);

		$.ajax({
			url: "https://nss-seth-trippin.firebaseio.com/trips.json",
			method: "POST",
			data: JSON.stringify(newLocation)
		}).done(function (newData) {
			console.log(newData);
		}).fail(function (xhr, status, error) {
			console.log("error:", error);
		});		
	});

});