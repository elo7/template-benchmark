const VueTest = {
	name: 'Vue',
	prepare: function() {
		return fetch('vue/tpl_escaped.vue').then(tpl => tpl.text());
	},
	step: function(template, data) {
		return new Promise(resolve => {
			result.innerHTML = template;
			const app = new Vue({ el: '#result', data: data });
			resolve();
		});
	}
};

const VueUnescapedTest = {
	name: 'Vue (unescaped)',
	prepare: function() {
		return fetch('vue/tpl_unescaped.vue').then(tpl => tpl.text());
	},
	step: function(template, data) {
		return new Promise(resolve => {
			result.innerHTML = template;
			const app = new Vue({ el: '#result', data: data });
			resolve();
		});
	}
};
