const DustTest = {
	name: 'Dust',
	prepare: function() {
		return fetch('dust/tpl_escaped.dust').then(tpl => tpl.text()).then(tpl => {
			let compiled = dust.compile(tpl, 'test');
			dust.loadSource(compiled);
		});
	},
	step: function(template, data) {
		return new Promise((resolve, reject) => {
			dust.render('test', data, function(err, html) {
				if (err) {
					reject(err);
				} else {
					result.innerHTML = html;
					resolve();
				}
			});
		});
	}
};

const DustUnescapedTest = {
	name: 'Dust (unescaped)',
	prepare: function() {
		return fetch('dust/tpl_unescaped.dust').then(tpl => tpl.text()).then(tpl => {
			let compiled = dust.compile(tpl, 'test');
			dust.loadSource(compiled);
		});
	},
	step: function(template, data, done) {
		return new Promise((resolve, reject) => {
			dust.render('test', data, function(err, html) {
				if (err) {
					reject(err);
				} else {
					result.innerHTML = html;
					resolve();
				}
			});
		});
	}
};
