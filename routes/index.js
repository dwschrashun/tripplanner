var Place = require("../models").Place;
var Hotel = require("../models").Hotel;
var Activity = require("../models").Activity;
var Restaurant = require("../models").Restaurant;

module.exports.index = function(req, res) {
	var promiseArray = [];
	// Hotel.find().exec().then(function(result) {
	// 	promiseArray.push(result);
	// })

	Promise.all([Hotel.find().exec(), Activity.find().exec(), Restaurant.find().exec()]).
		then(function (resultArr) {
			console.dir(resultArr);
			var hotels = resultArr[0];
			var activities = resultArr[1];
			var restaurants = resultArr[2];
			res.render("index", {hotels: hotels, activities: activities, restaurants: restaurants});

		});


	// Hotel.find().exec().then(function(result){
	// 	res.render("index");
	// 	});

	
};

module.exports.error = function(req, res) {
	res.render('error');
};
