'use strict';

// MODULES //

var partial = require( './partial.js' );


// RANDOM //

/**
* FUNCTION: random( len, mu, beta[, rand] )
*	Creates an array of Gumbel distributed random variates.
*
* @param {Number} len - array length
* @param {Number} mu - location parameter
* @param {Number} beta - scale parameter
* @param {Function} [rand=Math.random] - random number generator
* @returns {Number[]} array filled with Gumbel random variates
*/
function random( len, mu, beta, rand ) {
	var out,
		draw,
		i;

	draw = partial( mu, beta, rand );
	// Ensure fast elements...
	if ( len < 64000 ) {
		out = new Array( len );
		for ( i = 0; i < len; i++ ) {
			out[ i ] = draw();
		}
	} else {
		out = [];
		for ( i = 0; i < len; i++ ) {
			out.push( draw() );
		}
	}
	return out;
} // end FUNCTION random()


// EXPORTS //

module.exports = random;
