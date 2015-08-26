'use strict';

// FUNCTIONS //

var ln = Math.log;


// PARTIAL //

/**
* FUNCTION: partial( mu, beta[, rand] )
*	Partially applies location parameter `mu` and scale parameter `beta` and
*	returns a function to generate random variables from the Gumbel distribution.
*
* @param {Number} mu - location parameter
* @param {Number} beta - scale parameter
* @param {Function} [rand=Math.random] - random number generator
* @returns {Function} function which generates random draws from the specified distribution
*/
function partial( mu, beta, rand ) {
	var random;
	if ( rand ) {
		random = rand;
	} else {
		random = Math.random;
	}
	/**
	* FUNCTION: draw( x )
	*	Generates a random draw from a Gumbel distribution with location parameter `mu`
	*	and scale parameter `beta`.
	*
	* @private
	* @returns {Number} random draw from the specified distribution
	*/
	return function draw() {
		var u = random();
		return mu - beta * ln( -ln( u ) );
	}; // end FUNCTION draw()
} // end FUNCTION partial()

module.exports = partial;
