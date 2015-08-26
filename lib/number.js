'use strict';

// FUNCTIONS //

var ln = Math.log;


// GENERATE GUMBEL RANDOM VARIATES //

/**
* FUNCTION random( mu, beta[, rand] )
*	Generates a random draw from a Gumbel distribution with location parameter `mu`
*	and scale parameter `beta`.
*
* @param {Number} mu - location parameter
* @param {Number} beta - scale parameter
* @param {Function} [rand=Math.random] - random number generator
* @returns {Number} random draw from the specified distribution
*/
function random( mu, beta, rand ) {
	var u;
	u = rand ? rand() : Math.random();
	return mu - beta * ln( -ln( u ) );
}

module.exports = random;
