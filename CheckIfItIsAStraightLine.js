/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    var [x1, y1] = coordinates[0], m;
    for (var i = 1; i < coordinates.length; ++ i) {
        var [x2, y2] = coordinates[i];
        var slope = getSlope(x1, x2, y1, y2);
        if (m === undefined) {
            m = slope;
        }
        if (m !== slope) {
            return false;
        }
    }
    return true;
};

var getSlope = function(x1, x2, y1, y2) {
    return (y2 - y1) / (x2 - x1);
}
