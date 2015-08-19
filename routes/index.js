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
			//console.dir(resultArr);
			res.render("index");
		});
	// Hotel.find().exec().then(function(result){
	// 	res.render("index");
	// 	});

	
};

module.exports.error = function(req, res) {
	res.render('error');
};
