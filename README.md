Gumbel Random Variables
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependencies][dependencies-image]][dependencies-url]

> Creates a [matrix](https://github.com/dstructs/matrix) or array filled with draws from a [Gumbel distribution](https://en.wikipedia.org/wiki/Gumbel_distribution).


## Installation

``` bash
$ npm install distributions-gumbel-random
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var random = require( 'distributions-gumbel-random' );
```

#### random( [dims][, opts] )

Creates a [`matrix`](https://github.com/dstructs/matrix) or [`array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) filled with draws from a [Gumbel distribution](https://en.wikipedia.org/wiki/Gumbel_distribution). The `dims` argument may either be a positive `integer` specifying a `length` or an `array` of positive `integers` specifying dimensions. If no `dims` argument is supplied,
the function returns a single random draw from a [Gumbel distribution](https://en.wikipedia.org/wiki/Gumbel_distribution).

``` javascript
var out;

// Set seed
random.seed = 2;

out = random( 5 );
// returns [ ~-0.348, ~-0.251, ~2.192, ~-0.098, ~-0.701 ]

out = random( [2,1,2] );
// returns [ [ [~0.173,~0.602] ], [ [~-0.74,~0.061] ] ]

```

The function accepts the following `options`:

*	__mu__: location parameter. Default: `0`.
*	__beta__: scale parameter. Default: `1`.
*	__seed__: positive integer used as a seed to initialize the generator. If not supplied, uniformly distributed random numbers are generated via `Math.random`.
*	__dtype__: output data type (see [`matrix`](https://github.com/dstructs/matrix) for a list of acceptable data types). Default: `generic`.

A [Gumbel](https://en.wikipedia.org/wiki/Gumbel_distribution) distribution is a function of two parameters: `mu`(location parameter) and `beta > 0`(scale parameter). By default, `mu` is equal to `0` and `beta` is equal to `1`. To adjust either parameter, set the corresponding option.

``` javascript
var out = random( 5, {
	'mu': 3,
	'beta': 6,
});
// returns [ ~19.724, ~0.966, -2.62, ~-1.268, 4.61 ]

```

To be able to reproduce the generated random variates, set the `seed` option to a positive integer.

``` javascript
var out = random( 3, {
	'seed': 22
});
// returns [ ~-0.348, ~1.854, ~3.241 ]

var out = random( 3, {
    'seed': 22
});
// returns [ ~-0.348, ~1.854, ~3.241 ]

```

If no `seed` option is supplied, each function call uses a common underlying uniform number generator. A positive-integer seed for this underlying generator can be supplied by setting the seed property of the exported function.

```javascript
random.seed = 11;
var out = random();
// returns ~-0.348

var out = random();
// returns ~0.254

random.seed = 11;
var out = random();
// returns ~-0.348

var out = random();
// returns ~0.254

```

By default, the output data structure is a generic [`array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array). To output a [`typed array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays) or [`matrix`](https://github.com/dstructs/matrix), set the `dtype` option.

``` javascript
var out;

out = random( 5, {
	'dtype': 'float32'
});
// returns Float32Array( [~1.885,~0.146,~-1.468,~-0.758,~-0.477] )

out = random( [3,2], {
	'dtype': 'float64'
});
/*
	[ ~2.436 ~-0.875
	  ~-0.383 ~0.261
	  ~1.356 ~0.366 ]
*/

```

__Notes__:
*	Currently, for more than `2` dimensions, the function outputs a __generic__ `array` and ignores any specified `dtype`.

	``` javascript
	var out = random( [2,1,3], {
		'dtype': 'float32'
	});
	// returns [ [ [~1.939,~1.826,~2.793] ], [ [~0.363,~-0.203,~0.274 ] ] ]

	```

## Examples

``` javascript
var random = require( 'distributions-gumbel-random' ),
	out;

// Set seed
random.seed = 23;

// Plain arrays...

// 1x10:
out = random( 10 );

// 2x1x3:
out = random( [2,1,3] );

// 5x5x5:
out = random( [5,5,5] );

// Typed arrays...
out = random( 10, {
	'dtype': 'float32'
});

// Matrices...
out = random( [3,2], {
	'dtype': 'float64'
});
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. The [Compute.io](https://github.com/compute-io) Authors.


[npm-image]: http://img.shields.io/npm/v/distributions-gumbel-random.svg
[npm-url]: https://npmjs.org/package/distributions-gumbel-random

[travis-image]: http://img.shields.io/travis/distributions-io/gumbel-random/master.svg
[travis-url]: https://travis-ci.org/distributions-io/gumbel-random

[codecov-image]: https://img.shields.io/codecov/c/github/distributions-io/gumbel-random/master.svg
[codecov-url]: https://codecov.io/github/distributions-io/gumbel-random?branch=master

[dependencies-image]: http://img.shields.io/david/distributions-io/gumbel-random.svg
[dependencies-url]: https://david-dm.org/distributions-io/gumbel-random

[dev-dependencies-image]: http://img.shields.io/david/dev/distributions-io/gumbel-random.svg
[dev-dependencies-url]: https://david-dm.org/dev/distributions-io/gumbel-random

[github-issues-image]: http://img.shields.io/github/issues/distributions-io/gumbel-random.svg
[github-issues-url]: https://github.com/distributions-io/gumbel-random/issues
