/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    num = num.toString(2), newNum = '';
    for (var i = 0; i < num.length; ++ i) {
        if (num[i] === '0') {
            newNum += '1';
        } else {
            newNum += '0';
        }
    }
    
    return parseInt(newNum, 2);
};
