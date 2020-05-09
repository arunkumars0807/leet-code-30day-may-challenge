/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    
    var start = 1;
    
    while (true) {
        var pow = start * start;
        if (pow === num) {
            return true;
        }
        if (pow > num) {
            return false;
        }
        ++ start;
    }
    
    return false;
    
};
