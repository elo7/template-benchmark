var fs = require('fs');
var Vue = require('vue');
var renderer = require('vue-server-renderer').createRenderer();
var code;

module.exports.prepare = function (data, done) {
	var str = fs.readFileSync(__dirname + '/tpl_escaped.vue', 'utf8');
	code = new Vue({ template: str, data: data });
	done();
};

module.exports.prepareUnescaped = function (data, done) {
	var str = fs.readFileSync(__dirname + '/tpl_unescaped.vue', 'utf8');
	code = new Vue({ template: str, data: data });
	done();
};

module.exports.step = function (done) {
	renderer.renderToString(code, done);
};
