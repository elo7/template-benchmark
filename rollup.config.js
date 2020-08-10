import svelte from 'rollup-plugin-svelte';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

const compile = template => ({
	input: template,
	output: {
		file: template.replace('html', 'js'),
		format: 'iife',
		name: template.replace('svelte/', '').replace('.html', '')
	},
	plugins: [
		svelte({
			generate: 'dom'
		}),
		nodeResolve(),
		commonjs(),
	],
});

export default [
	compile('svelte/tpl_escaped.html'),
	compile('svelte/tpl_unescaped.html'),
];