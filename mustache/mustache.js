var fs = require('fs');
var Mustache = require('mustache');
var tplData;
var str;

module.exports.prepare = function (data, done) {
	str = fs.readFileSync(__dirname + '/tpl_escaped.mst', 'utf8');
	tplData = data;
	Mustache.parse(str);
	done();
};

module.exports.prepareUnescaped = function (data, done) {
	str = fs.readFileSync(__dirname + '/tpl_unescaped.mst', 'utf8');
	tplData = data;
	Mustache.parse(str);
	done();
};

module.exports.step = function (done) {
	var html = Mustache.render(str, tplData);
	done(undefined, html);
};