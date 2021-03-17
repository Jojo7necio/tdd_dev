//Convert a Number to a String!
function numberToString(num) {
    if (typeof num === 'string') {
        return '';
    } else {
        return num.toString();
    }
}

module.exports = numberToString;