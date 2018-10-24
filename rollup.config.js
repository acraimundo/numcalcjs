import babel from 'rollup-plugin-babel';

export default {
	input: 'src/NumCalcJS.js',
	output: [{
		format: 'umd',
		name: 'NumCalcJS',
		file: 'build/numcalcjs.js',
		sourcemap: true
	}],
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
  ]
};