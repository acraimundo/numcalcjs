import { Bisection } from '../../src/RootFinders/Bisection.js';

describe('A Bisection Root Finder', function () {

	var _function;
	var _precision;

	beforeAll(function() {
		_function = function (x) {
			var x3 = x * x * x;
			return (x3 - x - 2.0);
		};
		_precision = 0.01;
	});

	it('should throw an invalid parameter error when f parameter is not a function', function () {

		expect(function() { 
			Bisection.findRoot(1, 2, _precision, 'not a function'); 
		}).toThrow('Invalid parameter.');

	});

	it('should throw an invalid interval error when fa * fb >= 0.', function () {

		expect(function() { 
			Bisection.findRoot(1, 1.1, _precision, _function); 
		}).toThrow('Invalid interval [a, b].');

	});

	it('should return a mean value when the difference is lower than the precision', function () {

		var a = 1.5, b = 1.75;
		expect(Bisection.findRoot(a, b, 1.0, _function)).toEqual((a + b) / 2.0);

	});

	it('should return the root lower than the precision', function () {

		var root = Bisection.findRoot(1.0, 2.0, _precision, _function);
		var fr = _function(root);
		expect(true).toBe( _function(fr) < _precision );

	});

});