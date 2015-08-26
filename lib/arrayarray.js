'use strict';

// MODULES //

var partial = require( './partial.js' ),
	recurse = require( './recurse.js' );


// RANDOM //

/**
* FUNCTION: random( dims, mu, beta[, rand] )
*	Creates a multidimensional array of Gumbel distributed random variates.
*
* @param {Number[]} dims - dimensions
* @param {Number} mu - location parameter
* @param {Number} beta - scale parameter
* @param {Function} [rand=Math.random] - random number generator
* @returns {Array} multidimensional array filled with Gumbel random variates
*/
function random( dims, mu, beta, rand ) {
	var draw = partial( mu, beta, rand );
	return recurse( dims, 0, draw );
} // end FUNCTION random()


// EXPORTS //

module.exports = random;
