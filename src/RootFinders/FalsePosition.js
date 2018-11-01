import { MaximumNumberOfIterations } from '../constants.js';
import { DivergenceError, InvalidParameterError } from '../../src/Exceptions';

class FalsePosition {

	static findRoot (a, b, precision, f, maxNumberOfIterations) {

		if (typeof f !== 'function') {
			throw new InvalidParameterError();
		}

		const maxIteration = maxNumberOfIterations | MaximumNumberOfIterations;
		const e = Math.abs(precision);
		let fa = f(a);
		let fb = f(b);
		let k, x, m, fx;

		if (fa * fb >= 0.0) {
			throw new InvalidParameterError('Invalid interval [a, b].');
		}

		if (Math.abs(b - a) < e) {
			return (a + b) / 2.0;
		} else if (Math.abs(fa) < e) {
      return a;
    } else if (Math.abs(fb) < e) {
      return b;
    }

		k = 1;

		do {

      fa = f(a);
      fb = f(b);
      m = fa;

      x = (a * fb - b * fa) / (fb - fa);
      fx = f(x);

			if (Math.abs(fx) < e) {
				return x;
			}

			if ((m * fx) > 0) {
				a = x;
			} else {
        b = x;
      }

      if (Math.abs(b - a) < e) {
        return (a + b) / 2;
      }

			k++;

		} while (k < maxIteration);

		throw new DivergenceError();
	}
}

export { FalsePosition };