var swig = require('swig');
var template;
var tplData;

module.exports.prepare = function (data, done) {
	tplData = data;
	template = swig.compileFile(__dirname + '/tpl_escaped.swig');
	done();
};

module.exports.prepareUnescaped = function (data, done) {
	tplData = data;
	template = swig.compileFile(__dirname + '/tpl_unescaped.swig');
	done();
};

module.exports.step = function (done) {
	var html = template(tplData);
	done(undefined, html);
};
