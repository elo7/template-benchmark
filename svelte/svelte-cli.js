const SvelteTest = {
	name: 'Svelte',
	prepare: function() {
		// Does nothing, template is compiled client-side
		return Promise.resolve();
	},
	step: function(template, data) {
		return new Promise((resolve, reject) => {
			new tpl_escaped({
				target: result,
				props: data
			});
			resolve();
		});
	}
};

const SvelteUnescapedTest = {
	name: 'Svelte (unescaped)',
	prepare: function() {
		// Does nothing, template is compiled client-side
		return Promise.resolve();
	},
	step: function(template, data, done) {
		return new Promise((resolve, reject) => {
			new tpl_unescaped({
				target: result,
				props: data
			});
			resolve();
		});
	}
};
