/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    if (ransomNote.length > magazine.length) {
        return false;
    }
    
    var map = {};
    
    for (var i = 0; i < ransomNote.length; ++ i) {
        map[ransomNote[i]] = ++ map[ransomNote[i]] || 1;
    }
    
    for (var i = 0; i < magazine.length; ++ i) {
        const c = magazine[i];
        if (map[c] !== undefined) {
            -- map[c];
        }
    }
    
    for (var c in map) {
        if (map.hasOwnProperty(c)) {
            if (map[c] > 0) {
                return false;
            }
        }
    }
    
    return true;
};
