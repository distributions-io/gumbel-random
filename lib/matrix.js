'use strict';

// MODULES //

var matrix = require( 'dstructs-matrix' ),
	partial = require( './partial.js' );


// RANDOM //

/**
* FUNCTION: random( dims, dt, mu, beta[, rand] )
*	Creates a matrix of Gumbel distributed random variates.
*
* @param {Number[]} dims - dimensions
* @param {String} dt - data type
* @param {Number} mu - location parameter
* @param {Number} beta - scale parameter
* @param {Function} [rand=Math.random] - random number generator
* @returns {Matrix} matrix filled with Gumbel random variates
*/
function random( dims, dt, mu, beta, rand ) {
	var out,
		draw,
		i;

	draw = partial( mu, beta, rand );
	out = matrix( dims, dt );
	for ( i = 0; i < out.length; i++ ) {
		out.data[ i ] = draw();
	}
	return out;
} // end FUNCTION random()


// EXPORTS //

module.exports = random;
