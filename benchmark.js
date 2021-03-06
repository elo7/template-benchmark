var data = require('./data');

var count = 100000;
var ect = require('./ect/ect.js');
var ejs = require('./ejs/ejs.js');
var ejsWithoutWith = require('./ejs-without-with/ejs.js');
var pug = require('./pug/pug.js');
var eco = require('./eco/eco.js');
var swig = require('./swig/swig.js');
var hogan = require('./hogan/hogan.js');
var dust = require('./dust/dust.js');
var fest = require('./fest/fest.js');
var dot = require('./dot/dot.js');
var handlebars = require('./handlebars/handlebars.js');
var coffeekup = require('./coffeekup/coffeekup.js');
var underscore = require('./underscore/underscore.js');
var mustache = require('./mustache/mustache.js');
var svelte = require('./svelte/svelte.js');
var vue = require('./vue/vue.js');
var nunjucks = require('./nunjucks/nunjucks.js');

var test = function(name, sample, cb) {
	var i = 0;
	var start;
	var done = function(error, html) {
		if (error) {
			throw error;
		}
		i++;
		if (i === count) {
			var now = Date.now();
			cb(null, name, now - start);
		}
	}
	sample.prepare(data, function() {
		start = Date.now();
		for (var j = 0; j < count; j++) {
			sample.step(done);
		}
	});
};

var testUnescaped = function(name, sample, cb) {
	var i = 0;
	var start;
	var done = function(error, html) {
		if (error) {
			throw error;
		}
		i++;
		if (i === count) {
			var now = Date.now();
			cb(null, name, now - start);
		}
	}
	sample.prepareUnescaped(data, function() {
		start = Date.now();
		for (var j = 0; j < count; j++) {
			sample.step(done);
		}
	});
};

var samples = [
	{ name : 'Pug', sample : pug },
	{ name : 'CoffeeKup', sample : coffeekup },
	{ name : 'Handlebars.js', sample : handlebars },
	{ name : 'Eco', sample : eco },
	{ name : 'EJS', sample : ejs },
	{ name : 'Underscore', sample : underscore },
	{ name : 'Swig', sample : swig },
	{ name : 'doT', sample : dot },
	{ name : 'EJS without `with`', sample : ejsWithoutWith },
	{ name : 'Fest', sample : fest },
	{ name : 'Hogan.js', sample : hogan },
	{ name : 'Dust', sample : dust },
	{ name : 'ECT', sample : ect },
	{ name : 'Mustache', sample : mustache },
	{ name : 'Svelte', sample : svelte },
	{ name : 'Vue', sample : vue },
	{ name : 'Nunjucks', sample : nunjucks }
];

var runTests = function () {
	if (samples.length) {
		var sample = samples.pop();
		test(sample.name, sample.sample, function (err, name, result) {
			testUnescaped(sample.name, sample.sample, function (err, name, resultUnescaped) {
				var total = result + resultUnescaped;
				console.log(`${name};${result};${resultUnescaped};${total}`);
				runTests();
			});
		});
	}
};

console.log('Framework;Escaped (ms);Unescaped (ms);Total (ms)');
runTests();
