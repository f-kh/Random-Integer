/// @author f-kh

/**
 * Main method for create random integer.
 *
 * @param {maxNumber} maximum integer.
 * @param {minNumber} minimum integer.
 * @return {random integer} The result create random integer.
 */
module.exports = function (maxNumber, minNumber) {
    if (maxNumber === undefined) {
        maxNumber = 999;
    }
    if (minNumber === undefined) {
        minNumber = 0;
    }
	
    minNumber = Math.ceil(minNumber);
    maxNumber = Math.floor(maxNumber);

    //The maximum is inclusive and the minimum is inclusive
    return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
};
