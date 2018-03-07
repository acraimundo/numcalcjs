import { MaximumNumberOfIterations } from '../constants.js';

var Bisection = {};

Bisection.findRoot = function(a, b, precision, f, maxNumberOfIterations) {

    if (typeof f !== 'function') {
        throw 'Invalid parameter.';
    }

    var maxIteration = maxNumberOfIterations | MaximumNumberOfIterations;
    var e = Math.abs(precision);
    var fa = f(a);
    var fb = f(b);
    var k, m, c;

    if (fa * fb >= 0.) {
        throw 'Invalid interval [a, b].';
    }

    if (Math.abs(b - a) < e) {
        return (a + b) / 2.;
    }

    k = 1;

    do {

        fa = f(a);
        c = (a + b) / 2.;

        if (Math.sign(fa) == Math.sign(f(c))) {
            a = c;
        } else {
            b = c;
        }

        if (Math.abs(b - a) < e) {
            return (a + b) / 2.;
        }

        k++;

    } while (k < maxIteration);

    return (a + b) / 2;

};

export { Bisection };