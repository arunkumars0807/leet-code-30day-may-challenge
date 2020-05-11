/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    return dfs(image, sr, sc, image[sr][sc], newColor);
};

var dfs = function(arr, i, j, src, tgt) {
    if (i < 0 || j < 0 || i >= arr.length || j >= arr[i].length || arr[i][j] === tgt || arr[i][j] !== src) {
        return arr;
    }
    
    arr[i][j] = tgt;
    
    if (i < arr.length - 1 && arr[i + 1][j] === src) {
        dfs(arr, i + 1, j, src, tgt);
    }
    
    if (i > 0 && arr[i - 1][j] === src) {
        dfs(arr, i - 1, j, src, tgt);
    }
        
    if (j < arr[i].length - 1 && arr[i][j + 1] === src) {
        dfs(arr, i, j + 1, src, tgt);
    }
        
    if (j > 0 && arr[i][j - 1] === src) {
        dfs(arr, i, j - 1, src, tgt);
    }
    
    return arr;
}
