var fs = require('fs');
var svelte = require('svelte');
var code;
var tplData;

require('svelte/ssr/register');

module.exports.prepare = function (data, done) {
	code = require('./tpl_escaped.html');
	tplData = data;
	done();
};

module.exports.prepareUnescaped = function (data, done) {
	code = require('./tpl_unescaped.html');
	tplData = data;
	done();
};

module.exports.step = function (done) {
	var html = code.render(tplData);
	done(undefined, html);
};
