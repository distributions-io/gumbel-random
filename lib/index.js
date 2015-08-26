'use strict';

// MODULES //

var isPositiveIntegerArray = require( 'validate.io-positive-integer-array' ),
	isPositiveInteger = require( 'validate.io-positive-integer' ),
	lcg = require( 'compute-lcg' ),
	validate = require( './validate.js' );


// FUNCTIONS //

var array = require( './array.js' ),
	typedarray = require( './typedarray.js' ),
	arrayarray = require( './arrayarray.js' ),
	matrix = require( './matrix.js' ),
	number = require( './number.js' );


// GUMBEL RANDOM VARIATES //

/**
* FUNCTION: random( dims[, opts] )
*	Creates a matrix or array filled with Gumbel random variables.
*
* @param {Number|Number[]} dims - dimensions
* @param {Object} [opts] - function options
* @param {Number} [opts.mu=0] - shape parameter
* @param {Number} [opts.beta=1] - scale parameter
* @param {Number} [opts.seed] - integer-valued seed
* @param {String} [opts.dtype="generic"] - output data type
* @returns {Array|Number[]|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array|Matrix} random variates
*/
function random( dims, options ) {
	var opts = {},
		isArray,
		ndims,
		err,
		len,
		mu,
		rand,
		beta,
		dt;

	if ( arguments.length > 0 ) {
		isArray = isPositiveIntegerArray( dims );
		if ( !isArray && !isPositiveInteger( dims ) ) {
			throw new TypeError( 'random()::invalid input argument. Dimensions argument must be either a positive integer or a positive integer array. Value: `' + dims + '`.' );
		}
	}
	if ( arguments.length > 1 ) {
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
	}

	if ( opts.seed ) {
		rand = lcg( opts.seed );
	}
	dt = opts.dtype || 'generic';
	mu = 0;
	if ( opts.mu !== undefined ) {
		mu = opts.mu;
	}
	beta = opts.beta || 1;

	if ( arguments.length === 0 ) {
		return number( mu, beta, rand );
	}
	if ( isArray ) {
		ndims = dims.length;
		if ( ndims < 2 ) {
			len = dims[ 0 ];
		}
	} else {
		ndims = 1;
		len = dims;
	}
	// 1-dimensional data structures...
	if ( ndims === 1 ) {
		if ( len === 1 ) {
			return number( mu, beta, rand );
		}
		if ( dt === 'generic' ) {
			return array( len, mu, beta, rand );
		}
		return typedarray( len, dt, mu, beta, rand );
	}
	// Multidimensional data structures...
	if ( dt !== 'generic' ) {
		if ( ndims === 2 ) {
			return matrix( dims, dt, mu, beta, rand );
		}
		// TODO: dstructs-ndarray support goes here. Until then, fall through to plain arrays...
	}
	return arrayarray( dims, mu, beta, rand );
} // end FUNCTION random()


// EXPORTS //

module.exports = random;
