// generates a random integer

/**
 *
 * @param {Number} high maximum amount of the random number
 * @returns {Number} random number
 */
exports.getRandomInt = function (high) {
    return Math.round(Math.random() * high)
}
