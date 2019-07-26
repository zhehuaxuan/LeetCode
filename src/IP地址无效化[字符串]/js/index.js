/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    var items = address.split(".");
    return items.join("[.]");
};