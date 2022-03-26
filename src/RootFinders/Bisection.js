import { MaximumNumberOfIterations } from '../constants.js';
import { InvalidParameterError, DivergenceError } from '../Exceptions.js';

class Bisection {
  static findRoot(a, b, precision, f, maxNumberOfIterations) {
    if (typeof f !== 'function') {
      throw new InvalidParameterError();
    }

    const maxIteration = maxNumberOfIterations | MaximumNumberOfIterations;
    const e = Math.abs(precision);
    let fa = f(a);
    let fb = f(b);
    let k, c;

    if (fa * fb >= 0.0) {
      throw new InvalidParameterError('Invalid interval [a, b].');
    }

    if (Math.abs(b - a) < e) {
      return (a + b) / 2.0;
    }

    k = 1;

    do {
      fa = f(a);
      c = (a + b) / 2.0;

      if (Math.sign(fa) == Math.sign(f(c))) {
        a = c;
      } else {
        b = c;
      }

      if (Math.abs(b - a) < e) {
        return (a + b) / 2.0;
      }

      k++;
    } while (k < maxIteration);

    throw new DivergenceError();
  }
}

export { Bisection };
