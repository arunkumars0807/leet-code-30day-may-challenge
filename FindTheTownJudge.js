/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(N, trust) {
    var aMap = {}, bMap = {};
    
    for (var i = 0; i < trust.length; ++ i) {
        var [a, b] = trust[i];
        aMap[a] = true;
        bMap[b] = ++ bMap[b] || 1;
    }
    
    for (var label in aMap) {
        if (aMap.hasOwnProperty(label)) {
            if (bMap[label] !== undefined) {
                delete bMap[label];
            }
        }
    }
    
    var keys = Object.keys(bMap);
    var aKeys = Object.keys(aMap);
    if (keys.length === 1) {
        if (bMap[keys[0]] === N - 1) {
            return keys[0];
        }
    }
    if (aKeys.length === 0) {
        return N;
    }
    return -1;
};
