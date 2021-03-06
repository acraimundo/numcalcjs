import { Bisection } from '../../src/RootFinders/Bisection.js';
import { DivergenceError, InvalidParameterError } from '../../src/Exceptions';

describe('A Bisection Root Finder', function () {

	let _function;
	let _precision;

	beforeAll(function() {
		_function = function (x) {
			const x3 = x * x * x;
			return (x3 - 9.0 * x + 3.0);
		};
		_precision = 1.0E-3;
	});

	it('should throw an invalid parameter error when f parameter is not a function', function () {

		expect(function() { 
			Bisection.findRoot(1.0, 2.0, _precision, 'not a function'); 
		}).toThrowError(InvalidParameterError);

	});

	it('should throw an invalid interval error when fa * fb >= 0.', function () {

		expect(function() { 
			Bisection.findRoot(1.0, 2.0, _precision, _function); 
		}).toThrowError(InvalidParameterError, 'Invalid interval [a, b].');

	});

	it('should return a mean value when the difference is lower than the precision', function () {

		let a = 0.0;
		let b = 1.0;
		expect(Bisection.findRoot(a, b, 2.0, _function)).toEqual((a + b) / 2.0);

	});

	it('should find the root and converge', function () {

		expect(function() { 
			Bisection.findRoot(0.0, 1.0, _precision, _function);
		}).not.toThrowError(DivergenceError);

	});

});