/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    var jMap = {};
    
    for (var i = 0; i < J.length; ++ i) {
        // Since they are guaranteed to be distinct, no need to check if it is already present.
        jMap[J[i]] = true;
    }
    
    var count = 0;
    for (var i = 0; i < S.length; ++ i) {
        if (jMap[S[i]]) {
            ++ count;
        }
    }
    return count;
};
