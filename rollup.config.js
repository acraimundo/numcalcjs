export default {
	entry: 'src/numcalc.js',
	indent: '\t',
	targets: [
		{
			format: 'umd',
			moduleName: 'NumCalcJS',
			dest: 'build/numcalcjs.js'
		}
	],
	sourceMap: true
};