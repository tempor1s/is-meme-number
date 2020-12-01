const isNumber = require('is-number');

module.exports = function (number) {
    // make sure the passed value is a number
    if (!isNumber(number)) {
        return false;
    }

    // check the number to see if it is a meme number
    switch (number) {
        // a meme number
        case 34:
            return true;
        case 42:
            return true;
        case 69:
            return true;
        case 420:
            return true;
        case 1337:
            return true;
        case 8008:
            return true;
        case 9001:
            return true;
        case 80085:
            return true;
        case 80084377:
            return true;
        // not a meme number
        default:
            return false;
    }
};
