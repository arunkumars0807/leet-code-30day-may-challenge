/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    var map = {};
    for (var i = 0; i < s.length; ++ i) {
        map[s[i]] = i;
    }
    
    for (var i = 0; i < s.length; ++ i) {
        if (map[s[i]] === i) {
            return i;
        } else {
            map[s[i]] = 0;
        }
    }
    return -1;
};
